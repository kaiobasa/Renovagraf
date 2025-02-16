from .models import Loja

def obter_loja(nome_loja):
    try:
        loja = Loja.objects.get(nome__iexact=nome_loja)
        return loja
    except Loja.DoesNotExist:
        return None

def get_loja_data(loja_param):
    lojas = {
        'renovagraf': {
            'nome': 'Renovagraf',
            'dominio': 'https://renovagraf.com.br',
            'cor_principal': '#e31e24',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_renovagraf.png',
            'favicon': 'favicon_renovagraf.png',
            'facebook_url': 'https://www.facebook.com/renovagraf',
            'instagram_url': 'https://www.instagram.com/renovagraf',
            'telefone': '(11) 2667-0333',
            'email': 'contato@renovagraf.com.br',
            'blog_url': 'https://renovagraf.com.br/blog/',
            'quem_somos_url': 'https://renovagraf.com.br/',
            'endereco_url': 'https://abrir.link/vZXYe'
        },
        'infinitygrafica': {
            'nome': 'Infinitygrafica',
            'dominio': 'https://infinitygrafica.com.br',
            'cor_principal': '#005eb8',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_infinity.png',
            'favicon': 'favicon_infinity.png',
            'facebook_url': 'https://www.facebook.com/infinitygrafica',
            'instagram_url': 'https://www.instagram.com/Infinitygraficaelivraria',
            'telefone': '(11) 2649-1201',
            'email': 'comercial@infinitygrafica.com.br',
            'blog_url': 'https://infinitygrafica.com.br/blog/',
            'quem_somos_url': 'https://infinitygrafica.com.br/quem-somos/',
            'endereco_url': 'https://abrir.link/vZXYe'
        },
        'primegraph': {
            'nome': 'PrimeGraph',
            'dominio': 'https://primegraph.com.br',
            'cor_principal': '#0f0f0f',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_primegraph.png',
            'favicon': 'favicon_primegraph.png',
            'telefone': '(11) 3333-4444',
            'email': 'contato@primegraph.com.br',
            'endereco_url': 'https://abrir.link/vZXYe'
        }
    }

    loja_data = lojas.get(loja_param.lower(), lojas['renovagraf'])  # Loja padrão se não existir

    # Verifica se a loja já existe no banco de dados
    loja = obter_loja(loja_data['nome'])
    if not loja:
        # Cria uma nova instância da loja e salva no banco de dados
        loja = Loja(
            nome=loja_data['nome'],
            dominio=loja_data['dominio'],
            cor_principal=loja_data['cor_principal'],
            cor_secundaria=loja_data['cor_secundaria'],
            logo=loja_data['logo'],
            favicon=loja_data['favicon'],
            facebook_url=loja_data['facebook_url'],
            instagram_url=loja_data['instagram_url'],
            telefone=loja_data['telefone'],
            email=loja_data['email'],
            blog_url=loja_data['blog_url'],
            quem_somos_url=loja_data['quem_somos_url'],
            endereco_url=loja_data['endereco_url']
        )
        loja.save()

    return loja