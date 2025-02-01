from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.urls import reverse
from loja.models import Loja  # Corrigir importação do modelo Loja
from .utils import get_loja_data  # Para pegar os dados dinâmicos da loja
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .models import Cliente, Endereco

def login_usuario(request, loja):
    loja_selecionada = get_loja_data(loja)
    if not loja_selecionada:
        loja_selecionada = get_object_or_404(Loja, nome__iexact=loja)
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        if not username or not password:
            messages.error(request, 'Por favor, preencha todos os campos.')
            return redirect('usuarios:login', loja=loja)
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Realiza o login
            login(request, user)
            messages.success(request, 'Login realizado com sucesso!')
            
            # Redirecionar dependendo da loja
            return redirect(reverse('home_loja', kwargs={'loja': loja}))
        else:
            messages.error(request, 'Credenciais inválidas. Tente novamente.')
    
    return render(request, 'usuarios/login.html', {'loja': loja_selecionada})

def cadastro_cliente(request):
    if request.method == 'POST':
        tipo_pessoa = request.POST.get('tipoPessoa')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            messages.error(request, 'As senhas não coincidem.')
            return redirect('usuarios:cadastro_cliente')

        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password)  # Salva a senha de forma segura
        )

        if tipo_pessoa == 'fisica':
            cpf = request.POST.get('cpf')
            nome_completo = request.POST.get('nome_completo')
            data_nascimento = request.POST.get('data_nascimento')
            celular = request.POST.get('celular')
            telefone = request.POST.get('telefone')
            cliente = Cliente.objects.create(
                user=user,
                tipo_pessoa=tipo_pessoa,
                cpf=cpf,
                nome_completo=nome_completo,
                data_nascimento=data_nascimento,
                celular=celular,
                telefone=telefone
            )
        else:
            cnpj = request.POST.get('cnpj')
            razao_social = request.POST.get('razao_social')
            ie = request.POST.get('ie')
            email_empresa = request.POST.get('email_empresa')
            celular_empresa = request.POST.get('celular_empresa')
            telefone_empresa = request.POST.get('telefone_empresa')
            cliente = Cliente.objects.create(
                user=user,
                tipo_pessoa=tipo_pessoa,
                cnpj=cnpj,
                razao_social=razao_social,
                ie=ie,
                celular=celular_empresa,
                telefone=telefone_empresa
            )

        cep = request.POST.get('cep')
        descricao_endereco = request.POST.get('descricao_endereco')
        endereco = request.POST.get('endereco')
        numero = request.POST.get('numero')
        complemento = request.POST.get('complemento')
        bairro = request.POST.get('bairro')
        municipio = request.POST.get('municipio')
        uf = request.POST.get('uf')

        endereco = Endereco.objects.create(
            cliente=cliente,
            cep=cep,
            descricao=descricao_endereco,
            endereco=endereco,
            numero=numero,
            complemento=complemento,
            bairro=bairro,
            municipio=municipio,
            uf=uf
        )

        messages.success(request, 'Cadastro realizado com sucesso!')
        return redirect('usuarios:login')

    return render(request, 'usuarios/cadastro_cliente.html')

def recuperar_senha(request):
    # View para recuperação de senha
    pass

def redefinir_senha(request, token):
    # View para redefinir a senha
    pass

def verificar_email(request, token):
    # Lógica para verificar email
    pass