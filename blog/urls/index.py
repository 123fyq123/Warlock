from django.urls import path, include
from blog.views.index import index

urlpatterns = [
    path("", index, name="index"),
]
