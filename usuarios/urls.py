from django.urls import path
from . import views

app_name = 'usuarios'

urlpatterns = [
    path('<str:loja>/cadastro/', views.cadastro_cliente, name='cadastro_cliente'),
    path('<str:loja>/verificar-email/', views.verificar_email, name='verificar_email'),
    path('<str:loja>/login/', views.login_usuario, name='login'),
]