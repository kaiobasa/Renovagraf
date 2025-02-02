import os
import django

# Configurar o módulo de configurações do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'renovagraf.settings')  # Substitua 'renovagraf' pelo nome do seu projeto
django.setup()

from django.core.mail import send_mail
from django.conf import settings

def enviar_email_teste():
    try:
        send_mail(
            subject='Teste de E-mail - Renovagraf',
            message='Este é um e-mail de teste enviado pelo Django.',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['kaiobasa@gmail.com'],  # Substitua pelo seu e-mail pessoal
            fail_silently=False,
        )
        print("E-mail enviado com sucesso!")
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")

if __name__ == '__main__':
    enviar_email_teste()