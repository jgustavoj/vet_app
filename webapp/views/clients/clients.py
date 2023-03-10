
from flask import (Blueprint, redirect, render_template, request, url_for)
from ... import ERROR_MESSAGES, models

bp = Blueprint('clients', __name__)

@bp.route('/', strict_slashes=False)
def index():
    return redirect(url_for('.clients'))


@bp.route('/clients')
def clients():
    # clients = models.Client.query.all()
    return render_template('ms/clients.html')