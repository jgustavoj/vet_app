import requests
import changelogs
import json
import os
from collections import defaultdict
from datetime import datetime, timedelta, time
from flask import (
    abort,
    Blueprint, 
    current_app, 
    flash,
    g, 
    redirect, 
    render_template, 
    request, 
    session,
    url_for,
    jsonify,
)

from itertools import groupby
from sqlalchemy import func, or_
from ... import ERROR_MESSAGES, models


bp = Blueprint('dashboard.admin', __name__)


@bp.route('/', strict_slashes=False)
def index():
    # if g.admin:
    return redirect(url_for('.dashboard'))
    # return redirect(url_for('.login'))

@bp.route('/dashboard')
# @authcheck(authgroups.all)
def dashboard():
    return render_template('ms/dashboard.html')

@bp.route('/login', methods=['GET'])
def login():
    return render_template('ms/login.html')
    # if g.admin:
    #     return redirect(url_for('admin.dashboard'))
    # return render_template('pm/login.html')
