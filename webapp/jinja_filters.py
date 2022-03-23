"""
Custom Jinja2 filters go here.


"""

from flask import Blueprint, current_app, g


bp = Blueprint('jinja_filters', __name__)


@bp.app_template_filter('capitalize')
def capitalize_string(txt):
    return txt.capitalize()