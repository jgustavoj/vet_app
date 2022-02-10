"""
The application factory for this project.
When new blueprints are created, they must be registered with the application inside create_app.

This module should maintain the sole purpose of housing the create_app
function and some basic support functions. Routes don't go here; they go in blueprints.

Larger projects may have multiple application modules, such as cronapp.py or apiapp.py,
but app.py should always contain the factory for the "primary" end-user facing 
website application.
"""
import os
from collections.abc import Iterable
from datetime import timedelta
from flask import current_app, Flask, g, request, send_from_directory, session
from pathlib import Path
# from pytz import timezone as pytztimezone
from typing import Iterable, Union
from werkzeug.exceptions import NotFound

from . import models, views
# from .utils.auth import authgroups, permissiongroups, unauthorize

REPO_ROOT = Path(__file__).parent.parent



def create_app(config_paths:Iterable[Union[str, Path]]=None, **config_overrides) -> Flask:
    """
    App factory. Loads config from each path defined in config_paths, in order.

    :config_overrides: should only be used in tests
    """
    # Initialize application and app.config
    config_paths = config_paths or []
    app = Flask(__name__, root_path=Path(__file__).parent.parent)
    for i, absolute_path in enumerate(config_paths):
        print('{} config from {}'.format('Loading' if i == 0 else 'Extending', absolute_path))
        app.config.from_pyfile(absolute_path)
    for key, val in config_overrides.items():
        app.config[key] = val

    # Initialize database
    with app.app_context():
        models.db.init_app(app)


    # Filters



    # View blueprints
    app.register_blueprint(views.public.bp)
    app.register_blueprint(views.dashboard.admin.bp, url_prefix='/admin')
    app.register_blueprint(views.setup.bp, url_prefix='/setup')


    # API blueprints


    # Before/after request registration
    app.before_request(before_request)


    # Register core function routes



    # Jinja globals
    # Each given name here becomes available as a variable anywhere within templates
    # (use sparingly; only for things that should truly be global)


    return app


def before_request():
    g.cloudfront_cache = {}
    g.root_url = current_app.config['DOMAIN']
    g.branding = current_app.config['BRANDING']
    g.admin = None
    # g.today = localize(utcnow(), g.timezone).date() # WARNING Timezone-adjusted. This is for display, not data.
    g.unread_kudos = 0

    # Return immediately if request is for a route where the DB may not be set up yet
    # NOTE at minimum, g.branding must be set up here, because 404s may end up at serve_static resource
    if request.endpoint in ('setup.init_db', 'setup.seed', 'serve_static_resource'):
        return


"""
CORE FUNCTION ROUTES
"""


def serve_static_resource(resource):
    """
    All requests that don't match another URL rule will reach here.
    Assumes any :resource: containing a period is requesting a static file
    and will try to send the file, otherwise always results in a 404
    """
    if '.' in resource:
        try:
            resource_dir = Path(REPO_ROOT, 'static').resolve()
            return send_from_directory(resource_dir, resource)
        except NotFound:
            # If request is for a file, g.company won't be loaded and 
            # normal 404 page will break
            return '404 Resource Not Found', 404
    raise NotFound()
