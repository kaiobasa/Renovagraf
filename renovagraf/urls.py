# renovagraf_v2/urls.py
from django.contrib import admin
from django.urls import path, include
from loja import views as loja_views  # Importando as views do app loja

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', loja_views.home, name='home'),  # Adicionando a URL raiz (/) para a view 'home'
    path('loja/', include('loja.urls')),  # Incluindo as URLs do app loja
]
