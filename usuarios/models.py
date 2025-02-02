from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class Usuario(AbstractUser):
    loja = models.ForeignKey(
        'loja.Loja',
        on_delete=models.CASCADE,
        related_name='usuarios',
        blank=True,
        null=True  # Permite que um usuário não esteja vinculado a uma loja inicialmente
    )
    cpf_cnpj = models.CharField(max_length=18, unique=False)
    saldo = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tipo_usuario = models.CharField(
        max_length=2,
        choices=[('pf', 'Pessoa Física'), ('pj', 'Pessoa Jurídica')],
        default='pf'
    )
    email_verificado = models.BooleanField(default=False)
    codigo_verificacao = models.CharField(max_length=6, blank=True, null=True)
    celular = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Cliente(models.Model):
    user = models.OneToOneField(
        'Usuario',
        on_delete=models.CASCADE,
        related_name='cliente'
    )
    celular = models.CharField(max_length=20, blank=True, null=True)
    telefone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.user.username


class Endereco(models.Model):
    usuario = models.OneToOneField(
        'Usuario',
        on_delete=models.CASCADE,
        null=True,  # Permite valores nulos temporariamente
        blank=True  # Permite campos em branco no formulário
    )
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


class Loja(models.Model):
    nome = models.CharField(max_length=255, unique=True)
    dominio = models.URLField(max_length=255, blank=True, null=True)
    cor_principal = models.CharField(max_length=7, blank=True, null=True)  # Exemplo: '#e31e24'
    cor_secundaria = models.CharField(max_length=7, blank=True, null=True)  # Exemplo: '#f8f8f8'
    logo = models.CharField(max_length=255, blank=True, null=True)  # Caminho para o arquivo de logo
    favicon = models.CharField(max_length=255, blank=True, null=True)  # Caminho para o arquivo de favicon
    facebook_url = models.URLField(max_length=255, blank=True, null=True)
    instagram_url = models.URLField(max_length=255, blank=True, null=True)
    telefone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    blog_url = models.URLField(max_length=255, blank=True, null=True)
    quem_somos_url = models.URLField(max_length=255, blank=True, null=True)
    endereco_url = models.URLField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.nome