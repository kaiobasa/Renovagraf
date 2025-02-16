from loja.models import Loja
import random
import string
from django.core.mail import send_mail
from django.conf import settings

def gerar_e_enviar_codigo_verificacao(usuario):
    """
    Gera um código de verificação de 6 dígitos e envia por e-mail.
    """
    codigo = ''.join(random.choices(string.digits, k=6))
    usuario.codigo_verificacao = codigo
    usuario.save()

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

def get_loja_data(loja_param):
    """
    Obtém os dados de uma loja com base no nome.
    Retorna uma instância de Loja ou None se a loja não existir.
    """
    try:
        return Loja.objects.get(nome__iexact=loja_param)
    except Loja.DoesNotExist:
        return None

def criar_ou_atualizar_loja(loja_param):
    """
    Cria ou atualiza uma loja com base no nome.
    Retorna uma instância de Loja.
    """
    lojas = {
        'renovagraf': {
            'nome': 'Renovagraf',
            'dominio': 'https://renovagraf.com.br',
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
            'dominio': 'https://infinitygrafica.com.br',
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
            'dominio': 'https://primegraph.com.br',
            'cor_principal': '#0c0c0ce8',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_primegraph.png',
            'favicon': 'favicon_primegraph.png',
            'telefone': '(11) 3333-4444',
            'email': 'contato@primegraph.com.br',
            'endereco_url': 'https://abrir.link/vZXYe'
        }
    }

    # Obtém os dados da loja ou usa a loja padrão (Renovagraf)
    loja_data = lojas.get(loja_param.lower(), lojas['renovagraf'])

    # Cria ou atualiza a loja no banco de dados
    loja, created = Loja.objects.update_or_create(
        nome=loja_data['nome'],
        defaults=loja_data
    )

    return loja  # Retorna uma instância de Loja

def enviar_email_verificacao(usuario):
    """
    Envia um e-mail de verificação para o usuário.
    """
    assunto = 'Verificação de E-mail'
    mensagem = f'Olá {usuario.username},\n\nSeu código de verificação é: {usuario.codigo_verificacao}\n\nObrigado!'
    remetente = settings.DEFAULT_FROM_EMAIL
    destinatario = [usuario.email]

    send_mail(assunto, mensagem, remetente, destinatario)