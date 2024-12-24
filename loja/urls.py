# loja/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Para a página inicial
    path('<str:loja>/', views.home, name='home_loja'),  # Para a página com a loja
]
