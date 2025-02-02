from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth.hashers import make_password
from django.conf import settings
from loja.models import Loja  # Importação do modelo Loja
from .models import Usuario, Endereco
from .utils import enviar_email_verificacao, get_loja_data, gerar_e_enviar_codigo_verificacao
import uuid  # Importação adicionada para gerar códigos únicos

# View de Login
def login_usuario(request, loja):
    # Busca os dados da loja
    loja_selecionada = get_loja_data(loja)
    if not loja_selecionada:
        loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Validação dos campos
        if not username or not password:
            messages.error(request, 'Por favor, preencha todos os campos.')
            return redirect('usuarios:login', loja=loja)

        # Autenticação do usuário
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Login realizado com sucesso!')
            return redirect(reverse('home_loja', kwargs={'loja': loja}))
        else:
            messages.error(request, 'Credenciais inválidas. Tente novamente.')

    # Renderiza a página de login com o contexto da loja
    return render(request, 'usuarios/login.html', {'loja': loja_selecionada})


# View de Cadastro de Cliente
def cadastro_cliente(request, loja):
    # Busca os dados da loja
    loja_selecionada = get_loja_data(loja)
    if not loja_selecionada:
        loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)

    if request.method == 'POST':
        # Dados gerais
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        tipo_pessoa = request.POST.get('tipoPessoa')

        # Validação de senhas
        if password != confirm_password:
            messages.error(request, 'As senhas não coincidem.')
            return redirect('usuarios:cadastro_cliente', loja=loja)

        # Dados específicos de Pessoa Física ou Jurídica
        if tipo_pessoa == 'fisica':
            cpf_cnpj = request.POST.get('cpf')
            celular = request.POST.get('celular')
        else:
            cpf_cnpj = request.POST.get('cnpj')
            celular = request.POST.get('celular_empresa')

        # Verifica se o e-mail já está cadastrado para esta loja
        if Usuario.objects.filter(email=email, loja=loja_selecionada).exists():
            messages.error(request, 'Este e-mail já está cadastrado nesta loja.')
            return redirect('usuarios:cadastro_cliente', loja=loja)

        # Cria o usuário vinculado à loja
        usuario = Usuario.objects.create(
            username=username,
            email=email,
            password=make_password(password),
            tipo_usuario='pf' if tipo_pessoa == 'fisica' else 'pj',
            cpf_cnpj=cpf_cnpj,
            celular=celular,
            loja=loja_selecionada
        )

        # Gera e envia o código de verificação por e-mail
        gerar_e_enviar_codigo_verificacao(usuario)

        # Salva o endereço
        endereco_data = {
            'cep': request.POST.get('cep'),
            'descricao': request.POST.get('descricao_endereco'),
            'endereco': request.POST.get('endereco'),
            'numero': request.POST.get('numero'),
            'complemento': request.POST.get('complemento'),
            'bairro': request.POST.get('bairro'),
            'municipio': request.POST.get('municipio'),
            'uf': request.POST.get('uf'),
        }
        Endereco.objects.create(usuario=usuario, **endereco_data)

        messages.success(request, 'Cadastro realizado com sucesso! Um código de verificação foi enviado para o seu e-mail.')
        return redirect('usuarios:verificar_email', loja=loja)  # Redireciona para a página de verificação

    # Renderiza a página de cadastro com o contexto da loja
    return render(request, 'usuarios/cadastro_cliente.html', {'loja': loja_selecionada})


# View de Verificação de E-mail
def verificar_email(request, loja):
    loja_selecionada = get_loja_data(loja)
    if not loja_selecionada:
        loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)

    if request.method == 'POST':
        codigo = request.POST.get('codigo')
        try:
            usuario = Usuario.objects.get(codigo_verificacao=codigo, loja__nome__iexact=loja)
            if not usuario.email_verificado:
                usuario.email_verificado = True
                usuario.codigo_verificacao = None  # Limpa o código após a validação
                usuario.save()
                messages.success(request, 'E-mail verificado com sucesso!')
                return redirect('usuarios:login', loja=loja)  # Redireciona para a página de login
            else:
                messages.error(request, 'Este código já foi usado.')
        except Usuario.DoesNotExist:
            messages.error(request, 'Código inválido.')

    # Renderiza a página de verificação de e-mail com o contexto da loja
    return render(request, 'usuarios/verificar_email.html', {'loja': loja_selecionada})