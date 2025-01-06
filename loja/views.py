from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UsuarioSiteForm, UsuarioGraficaForm, UsuarioGerenciaForm
from .models import UsuarioPerfil
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login
from django.core.mail import send_mail
from django.conf import settings
from .models import Loja  # Adicione essa linha no início do seu arquivo views.py
from .utils import get_loja_data  # Para pegar os dados dinâmicos da loja
from django.http import HttpResponse
from django.contrib.auth.models import User
from .forms import UsuarioSiteForm

def login(request, loja):
    loja_selecionada = get_loja_data(loja)
    return render(request, 'loja/login.html', {'loja': loja_selecionada})

def cadastro_usuario(request, loja):
    # Se o método for POST, processa o formulário
    if request.method == 'POST':
        form = UsuarioSiteForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            return redirect('login_cliente')  # Redireciona para a página de login
    else:
        form = UsuarioSiteForm()

    # Passa o template corretamente, incluindo o nome do app na pasta de templates
    return render(request, 'loja/cadastro_usuario.html', {'form': form, 'loja': loja})


def carrinho(request):
    # Lógica para o carrinho de compras
    return render(request, 'carrinho.html')


# Lista de Usuários da Gráfica
def lista_usuarios_grafica(request):
    # Filtrando os usuários com perfil gráfico
    usuarios_grafica = UsuarioPerfil.objects.filter(cargo="Funcionário Gráfico")  # Ajuste o campo 'cargo' se necessário
    return render(request, 'lista_usuarios_grafica.html', {'usuarios': usuarios_grafica})

# Lista de Usuários da Gerência (exemplo adicional, caso necessário)
def lista_usuarios_gerencia(request):
    usuarios_gerencia = UsuarioPerfil.objects.filter(cargo="Gerente")  # Ajuste o filtro de acordo com o seu modelo
    return render(request, 'lista_usuarios_gerencia.html', {'usuarios': usuarios_gerencia})

def enviar_email_confirmacao(usuario, loja):
    subject = f"Bem-vindo à {loja.capitalize()}!"
    message = f"Olá {usuario.nome_completo},\n\nObrigado por se cadastrar na área do cliente da {loja.capitalize()}. Estamos felizes em tê-lo conosco!\n\nAtenciosamente,\nEquipe {loja.capitalize()}"
    html_message = f"""
    <html>
    <body>
        <h2>Bem-vindo à {loja.capitalize()}!</h2>
        <p>Olá {usuario.nome_completo},</p>
        <p>Obrigado por se cadastrar na área do cliente da {loja.capitalize()}. Estamos felizes em tê-lo conosco!</p>
        <p>Atenciosamente,</p>
        <p>Equipe {loja.capitalize()}</p>
    </body>
    </html>
    """
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [usuario.email]

    send_mail(subject, message, from_email, recipient_list, html_message=html_message)

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
