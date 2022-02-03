
from flask import Blueprint
from .. import models


bp = Blueprint('setup', __name__)


@bp.route('/init-db')
def init_db():
    """
    Create database tables from models.
    
    This only creates tables that do not yet exist in the database. 
    It does NOT update existing tables to reflect changes made to models. 
    """
    models.db.create_all()
    return 'SUCCESS'
