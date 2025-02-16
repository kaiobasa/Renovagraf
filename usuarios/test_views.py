# filepath: /c:/Users/Kaio/Desktop/novosistema/renovagraf_v2/renovagraf/usuarios/test/test_views.py
import pytest
from django.urls import reverse
from usuarios.models import Usuario, Loja

@pytest.mark.django_db
def test_cadastro_cliente_view(client):
    loja = Loja.objects.create(nome='Renovagraf')
    url = reverse('usuarios:cadastro_cliente', kwargs={'loja': loja.nome})
    response = client.get(url)
    assert response.status_code == 200
    assert 'Cadastro de Cliente' in response.content.decode()

@pytest.mark.django_db
def test_cadastro_cliente_post(client):
    loja = Loja.objects.create(nome='Renovagraf')
    url = reverse('usuarios:cadastro_cliente', kwargs={'loja': loja.nome})
    data = {
        'username': 'testuser',
        'email': 'testuser@example.com',
        'password': 'password123',
        'confirm_password': 'password123',
        'tipoPessoa': 'fisica',
        'nome_completo': 'Test User',
        'cpf': '000.000.000-00',
        'celular': '(00) 9 0000-0000',
        'cep': '00000-000',
        'descricao_endereco': 'Casa',
        'endereco': 'Rua das Flores',
        'numero': '123',
        'complemento': 'Apto 101',
        'bairro': 'Centro',
        'municipio': 'São Paulo',
        'uf': 'SP'
    }
    response = client.post(url, data)
    assert response.status_code == 302  # Redireciona após o cadastro
    assert Usuario.objects.filter(email='testuser@example.com').exists()