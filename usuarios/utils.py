from loja.models import Loja
import random
import string
from django.core.mail import send_mail
from django.conf import settings

def gerar_e_enviar_codigo_verificacao(usuario):
    # Gera um código de 6 dígitos
    codigo = ''.join(random.choices(string.digits, k=6))
    
    # Salva o código no usuário
    usuario.codigo_verificacao = codigo
    usuario.save()

    # Envia o e-mail com o código
    try:
        send_mail(
            subject='Código de Verificação - Renovagraf',
            message=f'Seu código de verificação é: {codigo}. Por favor, insira este código na página de verificação.',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[usuario.email],
            fail_silently=False,
        )
        print(f"E-mail enviado com sucesso para {usuario.email}!")
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")

def get_loja_data(nome_loja):
    """
    Retorna uma instância válida do modelo Loja ou None se a loja não existir.
    """
    try:
        return Loja.objects.get(nome__iexact=nome_loja)
    except Loja.DoesNotExist:
        return None


def get_loja_data(loja_param):
    lojas = {
        'renovagraf': {
            'nome': 'Renovagraf',
            'dominio': 'https://renovagraf.com.br',  # Domínio específico da Renovagraf
            'cor_principal': '#e31e24',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_renovagraf.png',
            'favicon': 'favicon_renovagraf.png',
            'facebook_url': 'https://www.facebook.com/renovagraf',
            'instagram_url': 'https://www.instagram.com/renovagraf',
            'telefone': '(11) 2667-0333',
            'email': 'contato@renovagraf.com.br',
            'blog_url': 'https://renovagraf.com.br/blog/',
            'quem_somos_url': 'https://renovagraf.com.br/',
            'endereco_url': 'https://abrir.link/vZXYe'
        },
        'infinitygrafica': {
            'nome': 'Infinitygrafica',
            'dominio': 'https://infinitygrafica.com.br',  # Domínio específico da Infinitygrafica
            'cor_principal': '#005eb8',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_infinity.png',
            'favicon': 'favicon_infinity.png',
            'facebook_url': 'https://www.facebook.com/infinitygrafica',
            'instagram_url': 'https://www.instagram.com/Infinitygraficaelivraria',
            'telefone': '(11) 2649-1201',
            'email': 'comercial@infinitygrafica.com.br',
            'blog_url': 'https://infinitygrafica.com.br/blog/',
            'quem_somos_url': 'https://infinitygrafica.com.br/quem-somos/',
            'endereco_url': 'https://abrir.link/vZXYe'
        },
        'primegraph': {
            'nome': 'PrimeGraph',
            'dominio': 'https://primegraph.com.br',  # Domínio específico da PrimeGraph
            'cor_principal': '#0c0c0ce8',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_primegraph.png',
            'favicon': 'favicon_primegraph.png',
            'telefone': '(11) 3333-4444',
            'email': 'contato@primegraph.com.br',
            'endereco_url': 'https://abrir.link/vZXYe'
        }
    }
    return lojas.get(loja_param.lower(), lojas['renovagraf'])  # Loja padrão se não existir

from django.core.mail import send_mail
from django.conf import settings

def enviar_email_verificacao(usuario):
    """
    Simula o envio de um e-mail de verificação.
    Substitua esta função com a lógica real de envio de e-mail.
    """
    print(f"Enviando código de verificação para {usuario.email}: {usuario.codigo_verificacao}")