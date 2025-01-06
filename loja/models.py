# models.py

from django.db import models

# Tipos de pessoa
PESSOA_FISICA = 'F'
PESSOA_JURIDICA = 'J'
TIPO_PESSOA_CHOICES = [
    (PESSOA_FISICA, 'Pessoa Física'),
    (PESSOA_JURIDICA, 'Pessoa Jurídica'),
]

# Setores disponíveis
SETOR_CHOICES = [
    ('comercial', 'Comercial'),
    ('producao', 'Produção'),
    ('financeiro', 'Financeiro'),
    ('impressao', 'Impressão'),
    ('programacao', 'Programação'),
    ('acabamento', 'Acabamento'),
    ('expedicao', 'Expedição'),
    ('gerencia', 'Gerência'),
]

class Loja(models.Model):
    nome = models.CharField(max_length=100)
    # Adicione outros campos necessários, como cor da loja, etc.
    
    def __str__(self):
        return self.nome
class UsuarioPerfil(models.Model):
    loja = models.ForeignKey('Loja', on_delete=models.SET_NULL, null=True, blank=True)  # Relacionando ao modelo Loja
    tipo_pessoa = models.CharField(max_length=1, choices=TIPO_PESSOA_CHOICES)
    nome_completo = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    celular = models.CharField(max_length=15)
    telefone = models.CharField(max_length=15, blank=True, null=True)
    cpf = models.CharField(max_length=14, blank=True, null=True)
    cnpj = models.CharField(max_length=18, blank=True, null=True)
    nome_empresa = models.CharField(max_length=255, blank=True, null=True)
    data_nascimento = models.DateField(blank=True, null=True)
    endereco = models.CharField(max_length=255)
    cep = models.CharField(max_length=10)
    descricao_endereco = models.CharField(max_length=255, blank=True, null=True)
    numero = models.CharField(max_length=10)
    complemento = models.CharField(max_length=255, blank=True, null=True)
    bairro = models.CharField(max_length=255)
    municipio = models.CharField(max_length=255)
    uf = models.CharField(max_length=2)
    ramo_atividade = models.CharField(max_length=255, blank=True, null=True)
    senha = models.CharField(max_length=255)
    cargo = models.CharField(max_length=255, blank=True, null=True)
    setor_trabalho = models.CharField(max_length=255, choices=SETOR_CHOICES, blank=True, null=True)
    departamentos_acesso = models.JSONField(default=list, blank=True)
    acesso_completo = models.BooleanField(default=False)  # Apenas para a gerência

    def __str__(self):
        return self.nome_completo
