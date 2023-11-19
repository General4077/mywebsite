from django.urls import path
from . import views


urlpatterns = [
    # path("", views.index, name="index")
    path("", views.PostView.as_view(), name="index"),
    path("<int:pk>/", views.PostView.as_view(), name="index"),
]