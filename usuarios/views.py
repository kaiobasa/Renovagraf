from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.urls import reverse
from django.contrib.auth.hashers import make_password
from django.conf import settings
from loja.models import Loja  # Importação do modelo Loja
from .models import Usuario, Endereco
from .utils import get_loja_data, enviar_email_verificacao  # Importação das funções get_loja_data e enviar_email_verificacao
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
            # Verifica se o usuário pertence à loja correta
            if user.loja.nome.lower() == loja.lower():
                login(request, user)
                messages.success(request, 'Login realizado com sucesso!')
                # Redireciona para a área do cliente
                return redirect('usuarios:area_cliente', loja=loja)
            else:
                messages.error(request, 'Você não tem permissão para acessar esta loja.')
        else:
            messages.error(request, 'Credenciais inválidas. Tente novamente.')

    # Renderiza a página de login com o contexto da loja
    return render(request, 'usuarios/login.html', {'loja': loja_selecionada})


from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from .models import Usuario, Endereco
from .utils import criar_ou_atualizar_loja, enviar_email_verificacao
import uuid

def cadastro_cliente(request, loja):
    # Obtém ou cria a loja
    loja_selecionada = criar_ou_atualizar_loja(loja)

    if request.method == 'POST':
        # Dados do formulário
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        tipo_pessoa = request.POST.get('tipoPessoa')
        cpf_cnpj = request.POST.get('cpf') if tipo_pessoa == 'fisica' else request.POST.get('cnpj')
        celular = request.POST.get('celular') if tipo_pessoa == 'fisica' else request.POST.get('celular_empresa')

        # Validações
        if password != confirm_password:
            messages.error(request, 'As senhas não coincidem.')
            return redirect('usuarios:cadastro_cliente', loja=loja)

        if Usuario.objects.filter(email=email, loja=loja_selecionada).exists():
            messages.error(request, 'Este e-mail já está cadastrado nesta loja.')
            return redirect('usuarios:cadastro_cliente', loja=loja)

        if Usuario.objects.filter(username=username, loja=loja_selecionada).exists():
            messages.error(request, 'Este nome de usuário já está cadastrado nesta loja.')
            return redirect('usuarios:cadastro_cliente', loja=loja)

        # Cria o usuário
        usuario = Usuario.objects.create(
            username=username,
            email=email,
            password=make_password(password),
            tipo_usuario='pf' if tipo_pessoa == 'fisica' else 'pj',
            cpf_cnpj=cpf_cnpj,
            celular=celular,
            loja=loja_selecionada  # Passa a instância de Loja
        )

        # Gera e envia o código de verificação
        codigo_verificacao = str(uuid.uuid4())[:6]
        usuario.codigo_verificacao = codigo_verificacao
        usuario.save()
        enviar_email_verificacao(usuario)

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
        return redirect('usuarios:verificar_email', loja=loja)

    return render(request, 'usuarios/cadastro_cliente.html', {'loja': loja_selecionada})

def validar_cpf(cpf):
    """Valida um CPF."""
    cpf = ''.join(filter(str.isdigit, cpf))  # Remove caracteres não numéricos
    if len(cpf) != 11 or cpf == cpf[0] * 11:  # Verifica comprimento e dígitos repetidos
        return False

    # Calcula o primeiro dígito verificador
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    resto = (soma * 10) % 11
    if resto == 10:
        resto = 0
    if resto != int(cpf[9]):
        return False

    # Calcula o segundo dígito verificador
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    resto = (soma * 10) % 11
    if resto == 10:
        resto = 0
    if resto != int(cpf[10]):
        return False

    return True

def validar_cnpj(cnpj):
    """Valida um CNPJ."""
    cnpj = ''.join(filter(str.isdigit, cnpj))  # Remove caracteres não numéricos
    if len(cnpj) != 14 or cnpj == cnpj[0] * 14:  # Verifica comprimento e dígitos repetidos
        return False

    # Calcula o primeiro dígito verificador
    pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    soma = sum(int(cnpj[i]) * pesos[i] for i in range(12))
    resto = soma % 11
    digito1 = 0 if resto < 2 else 11 - resto

    if digito1 != int(cnpj[12]):
        return False

    # Calcula o segundo dígito verificador
    pesos.insert(0, 6)
    soma = sum(int(cnpj[i]) * pesos[i] for i in range(13))
    resto = soma % 11
    digito2 = 0 if resto < 2 else 11 - resto

    if digito2 != int(cnpj[13]):
        return False

    return True

# View de Verificação de E-mail
def verificar_email(request, loja):
    # Busca a loja pelo nome (case-insensitive)
    loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)

    if request.method == 'POST':
        # Obtém o código inserido pelo usuário
        codigo = request.POST.get('codigo')

        try:
            # Verifica se existe um usuário com o código fornecido
            usuario = Usuario.objects.get(codigo_verificacao=codigo, loja=loja_selecionada)

            # Verifica se o e-mail já foi validado anteriormente
            if usuario.email_verificado:
                messages.error(request, 'Este código já foi usado.')
            else:
                # Marca o e-mail como verificado e limpa o código
                usuario.email_verificado = True
                usuario.codigo_verificacao = None  # Limpa o código após a validação
                usuario.save()

                messages.success(request, 'E-mail verificado com sucesso!')
                return redirect('usuarios:login', loja=loja)  # Redireciona para a página de login

        except Usuario.DoesNotExist:
            # Caso o código seja inválido ou não exista
            messages.error(request, 'Código inválido.')

    # Renderiza a página de verificação de e-mail com o contexto da loja
    return render(request, 'usuarios/verificar_email.html', {'loja': loja_selecionada})

from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Usuario, Pedido, Orcamento, Pagamento

@login_required
def area_cliente(request, loja):
    # Busca os dados da loja
    loja_selecionada = get_loja_data(loja)
    if not loja_selecionada:
        loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)

    usuario = request.user  # Obtém o usuário logado

    # Dados do usuário
    dados_usuario = {
        'nome': usuario.get_full_name(),
        'email': usuario.email,
        'telefone': usuario.celular,
        'endereco': usuario.endereco,  # Acessa o endereço usando o relacionamento
    }

    # Pedidos do usuário
    pedidos = Pedido.objects.filter(usuario=usuario).order_by('-data_pedido')

    # Orçamentos do usuário
    orcamentos = Orcamento.objects.filter(usuario=usuario).order_by('-data_solicitacao')

    # Pagamentos do usuário
    pagamentos = Pagamento.objects.filter(usuario=usuario).order_by('-data_pagamento')

    # Saldo do usuário
    saldo = usuario.saldo

    context = {
        'loja': loja_selecionada,  # Passa a instância da loja para o template
        'dados_usuario': dados_usuario,
        'pedidos': pedidos,
        'orcamentos': orcamentos,
        'pagamentos': pagamentos,
        'saldo': saldo,
    }

    return render(request, 'usuarios/area_cliente.html', context)

from django.contrib.auth import logout
from django.shortcuts import redirect

def custom_logout(request, loja):
    logout(request)  # Realiza o logout
    return redirect('loja:home_loja', loja=loja)  # Redireciona para a home da loja atual