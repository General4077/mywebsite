from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound
from flask.views import View, MethodView

base = Blueprint("base_blueprint", __name__)


class Base(View):
    methods = ["get"]

    def get_template_name(self):
        raise NotImplementedError()

    def render_template(self, context):
        return render_template(self.get_template_name(), **context)

    def get_objects(self):
        return {}

    def dispatch_request(self):
        context = {"objects": self.get_objects()}
        return self.render_template(context)


class About(Base):
    def get_template_name(self):
        return "about/about.html"


base.add_url_rule("/", view_func=About.as_view("about"))

