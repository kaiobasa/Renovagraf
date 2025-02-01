from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Usuario

class FormularioCadastro(UserCreationForm):  # Use UserCreationForm que já lida com o campo senha
    class Meta:
        model = Usuario
        fields = ['username', 'email', 'cpf_cnpj', 'tipo_usuario']  # Não precisa adicionar o 'senha'

    def clean(self):
        cleaned_data = super().clean()
        return cleaned_data
