# forms.py

from django import forms
from .models import UsuarioPerfil
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
import re
from .models import UsuarioPerfil, Loja

class UsuarioSiteForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, label="Senha")
    confirm_password = forms.CharField(widget=forms.PasswordInput, label="Confirmação de Senha")

    # Campos de pessoa física
    cpf = forms.CharField(max_length=14, required=False, label="CPF")
    nome_completo = forms.CharField(max_length=255, required=True, label="Nome Completo")
    data_nascimento = forms.DateField(required=False, widget=forms.DateInput(attrs={'type': 'date'}), label="Data de Nascimento")
    celular = forms.CharField(max_length=15, required=True, label="Celular")
    telefone = forms.CharField(max_length=15, required=False, label="Telefone")
    endereco = forms.CharField(max_length=255, required=True, label="Endereço")
    cep = forms.CharField(max_length=10, required=True, label="CEP")
    descricao_endereco = forms.CharField(max_length=255, required=False, label="Descrição (Ex.: Casa, Trabalho)")
    numero = forms.CharField(max_length=10, required=True, label="Número")
    complemento = forms.CharField(max_length=255, required=False, label="Complemento")
    bairro = forms.CharField(max_length=255, required=True, label="Bairro")
    municipio = forms.CharField(max_length=255, required=True, label="Município")
    uf = forms.CharField(max_length=2, required=True, label="UF")
    
    # Campos de pessoa jurídica
    cnpj = forms.CharField(max_length=18, required=False, label="CNPJ")
    razao_social = forms.CharField(max_length=255, required=False, label="Razão Social")
    ie = forms.CharField(max_length=20, required=False, label="I.E.")
    
    loja = forms.ModelChoiceField(queryset=Loja.objects.all(), required=True, label="Selecione a Loja")

    class Meta:
        model = UsuarioPerfil
        fields = [
            'loja', 'tipo_pessoa', 'nome_completo', 'email', 'celular', 'telefone', 
            'cpf', 'cnpj', 'razao_social', 'ie', 'data_nascimento', 'endereco', 'cep', 
            'descricao_endereco', 'numero', 'complemento', 'bairro', 'municipio', 'uf', 
            'senha', 'confirm_password'
        ]
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # Mostrar campos específicos para cada tipo de pessoa
        if self.instance and self.instance.tipo_pessoa == 'F':
            self.fields['cnpj'].widget = forms.HiddenInput()
            self.fields['razao_social'].widget = forms.HiddenInput()
            self.fields['ie'].widget = forms.HiddenInput()
        elif self.instance and self.instance.tipo_pessoa == 'J':
            self.fields['cpf'].widget = forms.HiddenInput()
            self.fields['data_nascimento'].widget = forms.HiddenInput()
        
        # Ajustar o campo de senha e confirmação
        self.fields['senha'].widget = forms.PasswordInput()
        self.fields['confirm_password'].widget = forms.PasswordInput()

    def clean(self):
        cleaned_data = super().clean()
        senha = cleaned_data.get('senha')
        confirm_password = cleaned_data.get('confirm_password')

        if senha != confirm_password:
            raise forms.ValidationError("As senhas não coincidem!")

        return cleaned_data
    

class CadastroUsuarioForm(forms.ModelForm):
    class Meta:
        model = UsuarioPerfil
        fields = [
            'tipo_pessoa', 'nome_completo', 'email', 'data_nascimento', 'celular', 'telefone', 
            'endereco', 'cep', 'descricao_endereco', 'numero', 'complemento', 'bairro', 
            'municipio', 'uf', 'cpf', 'cnpj', 'nome_empresa', 'ramo_atividade', 'senha'
        ]
        widgets = {
            'data_nascimento': forms.DateInput(attrs={'type': 'date'}),
        }
    
    def clean(self):
        cleaned_data = super().clean()
        tipo_pessoa = cleaned_data.get("tipo_pessoa")
        cpf = cleaned_data.get("cpf")
        cnpj = cleaned_data.get("cnpj")
        nome_empresa = cleaned_data.get("nome_empresa")
        
        # Validação para Pessoa Jurídica
        if tipo_pessoa == UsuarioPerfil.PESSOA_JURIDICA:
            if not cnpj:
                self.add_error('cnpj', 'CNPJ é obrigatório para Pessoa Jurídica.')
            if not nome_empresa:
                self.add_error('nome_empresa', 'Nome da empresa é obrigatório para Pessoa Jurídica.')
        
        # Validação para Pessoa Física
        if tipo_pessoa == UsuarioPerfil.PESSOA_FISICA:
            if not cpf:
                self.add_error('cpf', 'CPF é obrigatório para Pessoa Física.')
            if nome_empresa:
                self.add_error('nome_empresa', 'O campo nome da empresa deve ser vazio para Pessoa Física.')
        
        # Validação de senha
        senha = cleaned_data.get("senha")
        if len(senha) < 6 or not re.search(r'[A-Za-z]', senha) or not re.search(r'\d', senha):
            self.add_error('senha', 'A senha deve ter pelo menos 6 caracteres, incluindo uma letra e um número.')
        
        return cleaned_data
    
    # forms.py

class UsuarioGraficaForm(forms.ModelForm):
    class Meta:
        model = UsuarioPerfil  # Supondo que o modelo "UsuarioPerfil" armazene as informações
        fields = [
            'nome_completo', 'email', 'celular', 'telefone', 'cpf', 'cargo', 'setor_trabalho', 'senha', 
            'departamentos_acesso'
        ]

    # Definições de campos extras:
    setor_trabalho = forms.ChoiceField(choices=[
        ('comercial', 'Comercial'),
        ('producao', 'Produção'),
        ('financeiro', 'Financeiro'),
        ('impressao', 'Impressão'),
        ('programacao', 'Programação'),
        ('acabamento', 'Acabamento'),
        ('expedicao', 'Expedição'),
        ('gerencia', 'Gerência'),
    ])
    
    departamentos_acesso = forms.MultipleChoiceField(
        choices=[
            ('comercial', 'Comercial'),
            ('producao', 'Produção'),
            ('financeiro', 'Financeiro'),
            ('impressao', 'Impressão'),
            ('programacao', 'Programação'),
            ('acabamento', 'Acabamento'),
            ('expedicao', 'Expedição'),
            ('gerencia', 'Gerência'),
        ],
        widget=forms.CheckboxSelectMultiple,
        required=False,
    )
    
    def clean(self):
        cleaned_data = super().clean()
        # Validação de senha
        senha = cleaned_data.get("senha")
        if len(senha) < 6 or not re.search(r'[A-Za-z]', senha) or not re.search(r'\d', senha):
            self.add_error('senha', 'A senha deve ter pelo menos 6 caracteres, incluindo uma letra e um número.')
        
        return cleaned_data
    
    
class UsuarioGerenciaForm(forms.ModelForm):
    class Meta:
        model = UsuarioPerfil  # Supondo que o modelo "UsuarioPerfil" armazene as informações
        fields = [
            'nome_completo', 'email', 'celular', 'telefone', 'cpf', 'cargo', 'senha', 'acesso_completo'
        ]
    
    acesso_completo = forms.BooleanField(required=False, initial=False, label="Acesso Completo ao Sistema")
    
    def clean(self):
        cleaned_data = super().clean()
        senha = cleaned_data.get("senha")
        if len(senha) < 6 or not re.search(r'[A-Za-z]', senha) or not re.search(r'\d', senha):
            self.add_error('senha', 'A senha deve ter pelo menos 6 caracteres, incluindo uma letra e um número.')

        return cleaned_data


