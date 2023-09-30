from django.urls import path
from . import views

urlpatterns = [
    path('',views.home),
    path('templates',views.templates),
    path('teams',views.teams),
    path('abouts',views.abouts),
]