# loja/context_processors.py

from loja.utils import obter_loja

def loja_context(request):
    loja_nome = request.path.split('/')[2]  # Captura o nome da loja a partir da URL, por exemplo, 'renovagraf'
    loja = obter_loja(loja_nome)  # Tenta buscar a loja pelo nome
    return {
        'loja': loja,  # Agora você pode acessar a variável 'loja' no seu template
    }
