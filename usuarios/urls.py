from django.urls import path
from . import views

app_name = 'usuarios'

urlpatterns = [
    path('<str:loja>/login/', views.login_usuario, name='login'),
    path('cadastro-cliente/', views.cadastro_cliente, name='cadastro_cliente'),
    path('verificar-email/<str:token>/', views.verificar_email, name='verificar_email'),
    path('recuperar-senha/', views.recuperar_senha, name='recuperar_senha'),
    path('redefinir-senha/<str:token>/', views.redefinir_senha, name='redefinir_senha'),
]