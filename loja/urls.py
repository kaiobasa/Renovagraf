from django.urls import path
from . import views

urlpatterns = [
    # Página inicial
    path('', views.home, name='home'),  
    path('<str:loja>/', views.home, name='home_loja'),  

    
    # Rotas para os produtos da loja
    path('<str:loja>/flyers/', views.flyers, name='flyers'),  
    path('<str:loja>/livros/', views.livros, name='livros'),
    path('<str:loja>/cartoes-de-visita/', views.cartoes_de_visita, name='cartoes_de_visita'),
    path('<str:loja>/folders/', views.folders, name='folders'),
    path('<str:loja>/banners/', views.banners, name='banners'),
    path('<str:loja>/catalogos/', views.catalogos, name='catalogos'),
    path('<str:loja>/adesivos/', views.adesivos, name='adesivos'),
    path('<str:loja>/windbanner/', views.windbanner, name='windbanner'),
]