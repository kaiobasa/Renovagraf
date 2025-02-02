from django.db import models

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