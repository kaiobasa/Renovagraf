from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class Usuario(AbstractUser):
    """
    Modelo de usuário personalizado que estende o AbstractUser do Django.
    """
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

    class Meta:
        unique_together = ('email', 'loja')  # Garante que o e-mail seja único por loja


class Cliente(models.Model):
    """
    Modelo para armazenar informações adicionais do cliente.
    """
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
        related_name='endereco',  # Nome do relacionamento
        null=True,
        blank=True
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


class Pedido(models.Model):
    """
    Modelo para armazenar pedidos dos usuários.
    """
    usuario = models.ForeignKey(
        'Usuario',
        on_delete=models.CASCADE,
        related_name='pedidos'
    )
    data_pedido = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=50,
        choices=[
            ('pendente', 'Pendente'),
            ('em_andamento', 'Em Andamento'),
            ('concluido', 'Concluído'),
            ('cancelado', 'Cancelado'),
        ],
        default='pendente'
    )
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Pedido #{self.id} - {self.usuario.username}'


class Orcamento(models.Model):
    """
    Modelo para armazenar orçamentos solicitados pelos usuários.
    """
    usuario = models.ForeignKey(
        'Usuario',
        on_delete=models.CASCADE,
        related_name='orcamentos'
    )
    data_solicitacao = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=50,
        choices=[
            ('pendente', 'Pendente'),
            ('aprovado', 'Aprovado'),
            ('recusado', 'Recusado'),
        ],
        default='pendente'
    )
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Orçamento #{self.id} - {self.usuario.username}'


class Pagamento(models.Model):
    """
    Modelo para armazenar pagamentos realizados pelos usuários.
    """
    usuario = models.ForeignKey(
        'Usuario',
        on_delete=models.CASCADE,
        related_name='pagamentos'
    )
    data_pagamento = models.DateTimeField(auto_now_add=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=50,
        choices=[
            ('pendente', 'Pendente'),
            ('pago', 'Pago'),
            ('cancelado', 'Cancelado'),
        ],
        default='pendente'
    )

    def __str__(self):
        return f'Pagamento #{self.id} - {self.usuario.username}'