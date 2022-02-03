from datetime import datetime
from flask import (
    Blueprint, 
    current_app,
    flash, 
    g,
    redirect, 
    render_template, 
    request, 
    session,
    url_for,
)
from flask_login import LoginManager, login_user, login_required, logout_user, current_user

bp = Blueprint('public', __name__)


@bp.route('/')
def landing():
    # if authorized(authgroups.all):
    #     return redirect(url_for('pm.dashboard'))
    # return render_template('public/landing.html')
    return 'This is landing page'


@bp.route('/logout')
@bp.route('/sign-out')
def logout():
    # unauthorize()
    # return redirect(url_for('pm.login'))
    return 'This is logout'