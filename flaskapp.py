"""
This is a convenience file for people accustomed to using `python flaskapp.py`

All it does, and ever should do, is run the app with local config
"""

from webapp import create_app


if __name__ == '__main__':
    kwargs = {}
    app = create_app(['config/default.cfg', 'config/local.cfg'])
    with app.app_context():
        kwargs.update({
            'host': app.config.get('HOST', None),
            'port': app.config.get('PORT', None),
        })
        if app.config.get('LOCAL_MODE', False):
            kwargs['debug'] = True
    app.run(**kwargs)
