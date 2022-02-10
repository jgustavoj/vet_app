from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
import datetime as dt


db = SQLAlchemy()

class User(UserMixin, db.Model):
    __tablename__ = "admin"

    admin_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(250), unique=False, nullable=False)
    last_name = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    