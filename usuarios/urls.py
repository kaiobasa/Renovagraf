from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView  # Importação adicionada

app_name = 'usuarios'

urlpatterns = [
    # Rota para cadastro de cliente
    path('<str:loja>/cadastro/', views.cadastro_cliente, name='cadastro_cliente'),

    # Rota para verificação de e-mail
    path('<str:loja>/verificar-email/', views.verificar_email, name='verificar_email'),

    # Rota para login de usuário
    path('<str:loja>/login/', views.login_usuario, name='login'),

    # Rota para area do cliente
    path('<str:loja>/area-cliente/', views.area_cliente, name='area_cliente'),  # Nova rota

    # Rota para Logout do cliente
    path('<str:loja>/logout/', views.custom_logout, name='logout'),  # Usa a view personalizada
]