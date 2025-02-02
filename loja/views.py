from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login
from django.core.mail import send_mail
from django.conf import settings
from .models import Loja  # Adicione essa linha no início do seu arquivo views.py
from .utils import get_loja_data  # Para pegar os dados dinâmicos da loja
from django.http import HttpResponse
from django.contrib.auth.models import User




def carrinho(request):
    # Lógica para o carrinho de compras
    return render(request, 'carrinho.html')



# View da home
def home(request, loja=None):
    loja_param = loja if loja else 'renovagraf'
    loja_selecionada = get_loja_data(loja_param)  # Usa a função para pegar os dados da loja
    return render(request, 'loja/home.html', {'loja': loja_selecionada})

# Outras views (como flyers, livros, etc.)
def flyers(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/flyer.html', {'loja': loja_selecionada})

def livros(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/livros.html', {'loja': loja_selecionada})

def cartoes_de_visita(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/cartoes_de_visita.html', {'loja': loja_selecionada})

def folders(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/folders.html', {'loja': loja_selecionada})

def banners(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/banners.html', {'loja': loja_selecionada})

def catalogos(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/catalogos.html', {'loja': loja_selecionada})

def adesivos(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/adesivos.html', {'loja': loja_selecionada})

def windbanner(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/windbanner.html', {'loja': loja_selecionada})
