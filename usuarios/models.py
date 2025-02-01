from django.db import models
from django.contrib.auth.models import AbstractUser
import secrets
from django.utils import timezone
from django.contrib.auth.models import User
from django.db import models
from django.conf import settings


class Usuario(AbstractUser):
    loja = models.ForeignKey('loja.Loja', on_delete=models.SET_NULL, null=True)  # Relacionando com a loja
    cpf_cnpj = models.CharField(max_length=18, unique=True)  # CPF ou CNPJ
    saldo = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Saldo do cliente
    tipo_usuario = models.CharField(max_length=2, choices=[('pf', 'Pessoa Física'), ('pj', 'Pessoa Jurídica')])

    # Campos de verificação
    email_verificado = models.BooleanField(default=False)  # Se o email foi verificado
    email_verificacao_token = models.CharField(max_length=64, blank=True, null=True)  # Token de verificação
    email_verificacao_expira_em = models.DateTimeField(blank=True, null=True)  # Data de expiração do token

    def gerar_token_verificacao(self):
        """Gera um código de verificação único e o retorna"""
        token = secrets.token_urlsafe(32)  # Gera um token seguro de 32 bytes
        self.email_verificacao_token = token
        self.email_verificacao_expira_em = timezone.now() + timezone.timedelta(hours=1)  # O token expira em 1 hora
        self.save()
        return token

    def __str__(self):
        return f'{self.first_name} {self.last_name}'



class Cliente(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    tipo_pessoa = models.CharField(max_length=10, choices=[('fisica', 'Pessoa Física'), ('juridica', 'Pessoa Jurídica')])
    cpf = models.CharField(max_length=14, blank=True, null=True)
    nome_completo = models.CharField(max_length=255, blank=True, null=True)
    data_nascimento = models.DateField(blank=True, null=True)
    cnpj = models.CharField(max_length=18, blank=True, null=True)
    razao_social = models.CharField(max_length=255, blank=True, null=True)
    ie = models.CharField(max_length=20, blank=True, null=True)
    celular = models.CharField(max_length=20)
    telefone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.user.username

class Endereco(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    cep = models.CharField(max_length=9)
    descricao = models.CharField(max_length=255, blank=True, null=True)
    endereco = models.CharField(max_length=255)
    numero = models.CharField(max_length=10)
    complemento = models.CharField(max_length=255, blank=True, null=True)
    bairro = models.CharField(max_length=255)
    municipio = models.CharField(max_length=255)
    uf = models.CharField(max_length=2)

    def __str__(self):
        return f'{self.endereco}, {self.numero} - {self.municipio}/{self.uf}'