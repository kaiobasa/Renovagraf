from django.shortcuts import render

def home(request, loja=None):
    # Definindo os dados das lojas
    lojas = {
        'renovagraf': {
            'nome': 'Renovagraf',
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
            'cor_principal': '#0c0c0ce8',
            'cor_secundaria': '#f8f8f8',
            'logo': 'logo_primegraph.png',
            'favicon': 'favicon_primegraph.png',
            'telefone': '(11) 3333-4444',
            'email': 'contato@primegraph.com.br',
            'endereco_url': 'https://abrir.link/vZXYe'
        }
    }

    # Se o parâmetro 'loja' for passado na URL, ele será usado. Caso contrário, a loja padrão será 'renovagraf'
    loja_param = loja if loja else 'renovagraf'

    # Verifica se a loja selecionada existe, caso contrário, usa 'renovagraf'
    loja_selecionada = lojas.get(loja_param.lower(), lojas['renovagraf'])

    # Renderiza a página com as informações da loja selecionada
    return render(request, 'loja/home.html', {'loja': loja_selecionada})
