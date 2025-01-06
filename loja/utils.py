# utils.py
def get_loja_data(loja_param):
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
    return lojas.get(loja_param.lower(), lojas['renovagraf'])  # Loja padrão se não existir
