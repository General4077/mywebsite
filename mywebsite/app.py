from flask import Flask
from .blueprints.base.mywebsite import base

app = Flask(__name__)


def app_factory():
    app.register_blueprint(base)
    return app
