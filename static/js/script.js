let totalPrecoFinal = 0; // Declare totalPrecoFinal as a global variable

const shrinkPrecos = {
    "Individual": 1.00,
    "Coletivo": 0.00
};

const precos = {
    "Offset 75g/m²": {
        "pb": {
            "110x180": 0.037, "140x210": 0.037, "148x210": 0.039, "160x230": 0.039, 
            "170x240": 0.045, "180x260": 0.047, "200x200": 0.047, "210x210": 0.047, 
            "230x230": 0.047, "210x280": 0.047, "210x297": 0.047, "230x300": 0.047
        },
        "colorida": {
            "110x180": 0.198, "140x210": 0.198, "148x210": 0.220, "160x230": 0.220, 
            "170x240": 0.253, "180x260": 0.275, "200x200": 0.275, "210x210": 0.275, 
            "230x230": 0.275, "210x280": 0.275, "210x297": 0.275, "230x300": 0.275
        }
    },
    "Offset 90g/m²": {
        "pb": {
            "110x180": 0.044, "140x210": 0.044, "148x210": 0.049, "160x230": 0.049, 
            "170x240": 0.054, "180x260": 0.056, "200x200": 0.056, "210x210": 0.056, 
            "230x230": 0.056, "210x280": 0.056, "210x297": 0.056, "230x300": 0.056
        },
        "colorida": {
            "110x180": 0.253, "140x210": 0.253, "148x210": 0.275, "160x230": 0.275, 
            "170x240": 0.308, "180x260": 0.330, "200x200": 0.330, "210x210": 0.330, 
            "230x230": 0.330, "210x280": 0.330, "210x297": 0.330, "230x300": 0.330
        }
    },
    "Offset 120g/m²": {
        "pb": {
            "110x180": 0.076, "140x210": 0.076, "148x210": 0.087, "160x230": 0.087, 
            "170x240": 0.120, "180x260": 0.140, "200x200": 0.140, "210x210": 0.140, 
            "230x230": 0.140, "210x280": 0.140, "210x297": 0.140, "230x300": 0.140
        },
        "colorida": {
            "110x180": 0.286, "140x210": 0.286, "148x210": 0.319, "160x230": 0.319, 
            "170x240": 0.363, "180x260": 0.402, "200x200": 0.402, "210x210": 0.402, 
            "230x230": 0.402, "210x280": 0.402, "210x297": 0.402, "230x300": 0.402
        }
    },
    "Polen Nature 80g/m²": {
        "pb": {
            "110x180": 0.046, "140x210": 0.046, "148x210": 0.048, "160x230": 0.048, 
            "170x240": 0.050, "180x260": 0.052, "200x200": 0.052, "210x210": 0.052, 
            "230x230": 0.052, "210x280": 0.052, "210x297": 0.052, "230x300": 0.052
        },
        "colorida": {
            "110x180": 0.300, "140x210": 0.300, "148x210": 0.310, "160x230": 0.310, 
            "170x240": 0.342, "180x260": 0.375, "200x200": 0.375, "210x210": 0.375, 
            "230x230": 0.375, "210x280": 0.375, "210x297": 0.375, "230x300": 0.375
        }
    },
    "Polen bold 90g/m²": {
        "pb": {
            "110x180": 0.048, "140x210": 0.048, "148x210": 0.050, "160x230": 0.050, 
            "170x240": 0.054, "180x260": 0.058, "200x200": 0.058, "210x210": 0.058, 
            "230x230": 0.058, "210x280": 0.058, "210x297": 0.058, "230x300": 0.058
        },
        "colorida": {
            "110x180": 0.300, "140x210": 0.300, "148x210": 0.310, "160x230": 0.310, 
            "170x240": 0.342, "180x260": 0.375, "200x200": 0.375, "210x210": 0.375, 
            "230x230": 0.375, "210x280": 0.375, "210x297": 0.375, "230x300": 0.375
        }
    },
    "Couche 90g": {
        "pb": {
            "110x180": 0.060, "140x210": 0.060, "148x210": 0.070, "160x230": 0.070, 
            "170x240": 0.080, "180x260": 0.100, "200x200": 0.100, "210x210": 0.100, 
            "230x230": 0.100, "210x280": 0.100, "210x297": 0.100, "230x300": 0.100
        },
        "colorida": {
            "110x180": 0.300, "140x210": 0.300, "148x210": 0.310, "160x230": 0.310, 
            "170x240": 0.342, "180x260": 0.375, "200x200": 0.375, "210x210": 0.375, 
            "230x230": 0.375, "210x280": 0.375, "210x297": 0.375, "230x300": 0.375
        }
    },
    "Couche 115g": {
        "pb": {
            "110x180": 0.068, "140x210": 0.068, "148x210": 0.072, "160x230": 0.072, 
            "170x240": 0.100, "180x260": 0.110, "200x200": 0.110, "210x210": 0.110, 
            "230x230": 0.110, "210x280": 0.110, "210x297": 0.110, "230x300": 0.110
        },
        "colorida": {
            "110x180": 0.305, "140x210": 0.305, "148x210": 0.316, "160x230": 0.316, 
            "170x240": 0.353, "180x260": 0.380, "200x200": 0.380, "210x210": 0.380, 
            "230x230": 0.380, "210x280": 0.380, "210x297": 0.380, "230x300": 0.380
        }
    },
    "Couche 150g": {
        "pb": {
            "110x180": 0.110, "140x210": 0.110, "148x210": 0.120, "160x230": 0.120, 
            "170x240": 0.140, "180x260": 0.160, "200x200": 0.160, "210x210": 0.160, 
            "230x230": 0.160, "210x280": 0.160, "210x297": 0.160, "230x300": 0.160
        },
        "colorida": {
            "110x180": 0.321, "140x210": 0.321, "148x210": 0.353, "160x230": 0.353, 
            "170x240": 0.375, "180x260": 0.417, "200x200": 0.417, "210x210": 0.417, 
            "230x230": 0.417, "210x280": 0.417, "210x297": 0.417, "230x300": 0.417
        }
    },
    "Couche 170g": {
        "pb": {
            "110x180": 0.110, "140x210": 0.110, "148x210": 0.120, "160x230": 0.120, 
            "170x240": 0.140, "180x260": 0.160, "200x200": 0.160, "210x210": 0.160, 
            "230x230": 0.160, "210x280": 0.160, "210x297": 0.160, "230x300": 0.160
        },
        "colorida": {
            "110x180": 0.321, "140x210": 0.321, "148x210": 0.353, "160x230": 0.353, 
            "170x240": 0.375, "180x260": 0.417, "200x200": 0.417, "210x210": 0.417, 
            "230x230": 0.417, "210x280": 0.417, "210x297": 0.417, "230x300": 0.417
        }
    }
};

const custoAcabamento = {
    "Costurado": 3.00,
    "Colado (PUR)": 0.00,
    "Grampo": 0.40,
    "Espiral": 1.50,
    "Wire-o": 3.00
};

let numeroOrcamentoAtual = 1;
let mioloCounter = 0;

/**
 * Atualiza o número do orçamento no campo readonly
 * Gera um número sequencial único para cada orçamento
 */
function gerarNumeroOrcamento() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundo = String(dataAtual.getSeconds()).padStart(2, '0');
    const numeroOrcamento = `${ano}${mes}${dia}${hora}${minuto}${segundo}`;
    document.getElementById('numero-orcamento').textContent = numeroOrcamento;
    document.getElementById('hiddenNumeroOrcamento').value = numeroOrcamento;
}

// Add this function definition
    function toggleGuardasSection() {
        const tipoCapa = document.getElementById('tipoCapa').value;
        const guardasSection = document.getElementById('guardas-section');
        
        if (tipoCapa === 'Capa Dura') {
            guardasSection.style.display = 'block';
        } else {
            guardasSection.style.display = 'none';
        }
    }
    
    // Add this function before the calcularPreco function
    function atualizarPapelCapa() {
        const tipoCapa = document.getElementById('tipoCapa').value;
        const papelCapaInput = document.getElementById('papelCapa');
        
        if (tipoCapa === 'Brochura') {
            papelCapaInput.value = 'Cartão 250 g/m²';
        } else if (tipoCapa === 'Capa Dura') {
            papelCapaInput.value = 'Couchê 170 g/m²';
        }
        
        calcularPreco();
    }
    
    // Add this function before calcularPreco function
    function toggleTipoCliente() {
        const tipoCliente = document.querySelector('input[name="tipoCliente"]:checked').value;
        const dadosEditora = document.getElementById('dadosEditora');
        
        if (tipoCliente === 'Editora') {
            dadosEditora.style.display = 'block';
        } else {
            dadosEditora.style.display = 'none';
        }
        
        calcularPreco();
    }
    
    function calcularSpineThickness(totalPaginas, papelTipo, gramaturaBase, tipoCapa) {
        const espessuraPorFolha = {
            'Offset': (totalPaginas, gramatura) => (totalPaginas * gramatura) / 14400 * 10,
            'Polen Soft': (totalPaginas, gramatura) => (totalPaginas * gramatura) / 14400 * 10,
            'Polen Bold': (totalPaginas) => (totalPaginas * 115) / 14400 * 10,
            'Couche': (totalPaginas, gramatura) => (totalPaginas * gramatura) / 2000 * 10
        };
    
        let tipoBase = null;
    
        // Determina o tipo de papel com base no texto
        if (papelTipo.includes('Offset')) {
            tipoBase = 'Offset';
        } else if (papelTipo.includes('Polen Soft')) {
            tipoBase = 'Polen Soft';
        } else if (papelTipo.includes('Polen Bold')) {
            tipoBase = 'Polen Bold';
        } else if (papelTipo.includes('Couche')) {
            tipoBase = 'Couche';
        }
    
        if (!tipoBase) {
            console.error("Tipo de papel não identificado. Retornando 0.");
            return 0; // Retorna 0 se o tipo de papel não for identificado
        }
    
        const gramatura = parseInt(gramaturaBase, 10);
        const calcularEspessura = espessuraPorFolha[tipoBase];
        let espessuraTotal;
    
        // Calcula a espessura total considerando a gramatura
        if (tipoBase === 'Polen Bold') {
            espessuraTotal = calcularEspessura(totalPaginas);
        } else {
            espessuraTotal = calcularEspessura(totalPaginas, gramatura);
        }
    
        // Arredondar sempre para cima
        espessuraTotal = Math.ceil(espessuraTotal);
    
        // Adiciona 4 mm se for capa dura
        if (tipoCapa === 'Capa Dura') {
            espessuraTotal += 4;
        }
    
        return espessuraTotal;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        gerarNumeroOrcamento();
        atualizarPapelCapa();
        toggleGuardasSection();
        toggleTipoCliente();
        calcularPreco();
    
        document.getElementById('tipoCapa').addEventListener('change', atualizarPapelCapa);
        document.getElementById('tipoCapa').addEventListener('change', toggleGuardasSection);
        document.getElementById('autorIndependente').addEventListener('change', toggleTipoCliente);
        document.getElementById('Editora').addEventListener('change', toggleTipoCliente);
        document.getElementById('formato').addEventListener('change', calcularPreco);
        document.getElementById('tiragem').addEventListener('input', calcularPreco);
        document.getElementById('tipoProva').addEventListener('change', calcularPreco);
        document.getElementById('tipoAcabamento').addEventListener('change', calcularPreco);
    });
    
    function calculateCoverPrice(format, quantity, coverType, papelCapa, impressaoCapa) {
        if (coverType === 'Capa Dura') {
            return 15.000;
        }
    
        let basePrice;
    
        if (papelCapa === 'Cartão 250 g/m²') {
            const [formatWidth, formatHeight] = (format || '').split('x').map(Number);
            
            if (formatWidth <= 140 && formatHeight <= 210) {
                basePrice = 1.600;
            } else if (formatWidth <= 160 && formatHeight <= 230) {
                basePrice = 1.700;
            } else if (formatWidth <= 170 && formatHeight <= 240) {
                basePrice = 1.900;
            } else {
                basePrice = 2.000;
            }
        } else {
            const formatPrices = {
                '100x150': 1.600, '140x210': 1.600, '148x210': 1.700,
                '150x150': 1.700, '160x230': 1.700, '170x170': 1.900,
                '170x240': 1.900, '180x240': 2.000, '200x200': 2.000,
                '210x210': 2.600, '210x280': 2.000, '210x297': 2.000,
                '230x230': 2.000, '205x275': 2.000
            };
    
            basePrice = formatPrices[format] || 2.600;
        }
    
        if (quantity <= 50) {
            basePrice *= 1.30;
        } else if (quantity <= 100) {
            basePrice *= 1.25;
        } else if (quantity <= 300) {
            basePrice *= 1.20;
        } else if (quantity <= 500) {
            basePrice *= 1.15;
        } else {
            basePrice *= 1.10;
        }
    
        if (impressaoCapa === 'Frente e verso colorida') {
            return 10.00;
        }
    
        return parseFloat(basePrice.toFixed(3));
    }


    function getClosestFormat(largura, altura) {
        if (largura <= 140 && altura <= 210) {
            return "140x210";
        } else if (largura <= 160 && altura <= 230) {
            return "160x230";
        } else if (largura <= 170 && altura <= 240) {
            return "170x240";
        } else {
            return "210x297";
        }
    }
    
    function calcularPreco() {
        const tiragem = parseInt(document.getElementById('tiragem').value) || 0;
        const tipoAcabamento = document.getElementById('tipoAcabamento').value;
        const custoAcabamentoUnitario = custoAcabamento[tipoAcabamento] || 0;
    
        const largura = parseInt(document.getElementById('largura-input').value) || 140; // Largura em mm
        const altura = parseInt(document.getElementById('altura-input').value) || 210; // Altura em mm
    
        // Obter o formato mais próximo
        const formato = getClosestFormat(largura, altura);
    
        const tipoCapa = document.getElementById('tipoCapa').value || '';
        const papelCapa = document.getElementById('papelCapa').value || '';
        const impressaoCapa = document.getElementById('impressaoCapa').value || '';
        const shrinkTipo = document.getElementById('shrink').value || '';
        const shrinkPreco = shrinkTipo === 'Individual' ? 1.00 * tiragem : 0;
    
        const tipoCliente = document.querySelector('input[name="tipoCliente"]:checked').value;
        let cnpjEditora = '';
        let nomeEditora = '';
    
        if (tipoCliente === 'Editora') {
            cnpjEditora = document.getElementById('cnpjEditora').value;
            nomeEditora = document.getElementById('nomeEditora').value;
        }
    
        let percentualAcrescimo = 0;
        if (tiragem >= 20 && tiragem <= 50) {
            percentualAcrescimo = 0.30;
        } else if (tiragem >= 51 && tiragem <= 100) {
            percentualAcrescimo = 0.25;
        } else if (tiragem >= 101 && tiragem <= 300) {
            percentualAcrescimo = 0.20;
        } else if (tiragem >= 301 && tiragem <= 500) {
            percentualAcrescimo = 0.10;
        } else if (tiragem > 500) {
            percentualAcrescimo = 0.05;
        }
    
        const coverPrice = calculateCoverPrice(formato, tiragem, tipoCapa, papelCapa, impressaoCapa);
    
        let totalPaginas = 0;
        let totalPrecoMiolo = 0;
        let mioloDetails = [];
    
        document.querySelectorAll('.miolo-spec').forEach((mioloSpec) => {
            let quantidadePaginas = parseInt(mioloSpec.querySelector('[id^="quantidadePaginas"]').value) || 0;
            let papel = mioloSpec.querySelector('[id^="papel"]').value || '';
            let impressao = mioloSpec.querySelector('[id^="impressao"]').value || '';
    
            totalPaginas += quantidadePaginas;
    
            if (precos[papel] && precos[papel][impressao] && precos[papel][impressao][formato]) {
                let precoBase = precos[papel][impressao][formato];
                let precoFinal = precoBase * (1 + percentualAcrescimo);
                let precoMiolo = precoFinal * quantidadePaginas;
                totalPrecoMiolo += precoMiolo;
    
                mioloDetails.push({
                    paginas: quantidadePaginas,
                    papel: papel,
                    impressao: impressao === 'pb' ? 'Preto e Branco' : 'Colorida',
                    preco: precoMiolo
                });
            }
        });
    
        let specialsCost = 0;
        if (document.getElementById('vernizUV').checked) specialsCost += 500 * Math.ceil(tiragem / 1000);
        if (document.getElementById('softTouch').checked) specialsCost += 500 * Math.ceil(tiragem / 1000);
        if (document.getElementById('hotStamp').checked) specialsCost += 1300 * Math.ceil(tiragem / 1000);
        if (document.getElementById('relevo').checked) specialsCost += 500 * Math.ceil(tiragem / 1000);
        if (document.getElementById('sobreCapa').checked) specialsCost += 6 * tiragem;
        if (document.getElementById('acetato').checked) specialsCost += 3 * tiragem;
    
        let guardasPreco = 0;
        if (tipoCapa === 'Capa Dura') {
            const tipoGuardas = document.getElementById('tipoGuardas').value;
            if (tipoGuardas === 'Guardas coloridas' || tipoGuardas === 'Guardas preto e branco') {
                guardasPreco = 1.50;
            }
        }

    
        let valorProvaFisica = 0;
        const tipoProva = document.getElementById('tipoProva').value;
        if (tipoProva === 'Fisica') {
            valorProvaFisica = 250.00;
            
                       
        }
        
                
        document.getElementById('tipoProva').addEventListener('change', function() {
            if (this.value === 'Fisica') {
                showStyledPopup('Para o envio de prova física, será cobrado um valor de R$ 250,00.');
            }
            calcularPreco();
        });
        
    
        const precoTotalPorExemplar = totalPrecoMiolo + coverPrice + guardasPreco + (shrinkTipo === 'Individual' ? 1.00 : 0) + custoAcabamentoUnitario;
    
        const precoTotalTiragem = valorProvaFisica + precoTotalPorExemplar * tiragem;
    
        let totalPrecoFinal = precoTotalTiragem + specialsCost;
    
        if (tipoCliente === 'Editora') {
            totalPrecoFinal *= 0.95; // 5% de desconto
        }
    
        const spineThickness = calcularSpineThickness(totalPaginas, document.getElementById('papel1').value || '', (document.getElementById('papel1').value.match(/\d+/) || [0])[0]);
    
        document.getElementById('precoUnitario').value = precoTotalPorExemplar.toFixed(2);
        document.getElementById('precoTotal').value = totalPrecoFinal.toFixed(2);
    
        document.getElementById('hiddenTamanhoLombada').value = spineThickness;
        document.getElementById('hiddenTamanhoOrelha').value = document.getElementById('tamanhoOrelha').value || 0;
    
        updateSummary(tiragem, totalPaginas, precoTotalPorExemplar, totalPrecoFinal, spineThickness, mioloDetails, tipoCliente, cnpjEditora, nomeEditora, custoAcabamentoUnitario, guardasPreco, tipoAcabamento);
    }

/**
 * Valida a quantidade de páginas de todos os miolos
 * Verifica regras como páginas pares, múltiplos de 4 para grampo, e restrições de papel
 * @returns {Array} Array com mensagens de validação
 */
function validateAllMioloPages() {
    const mioloSections = document.querySelectorAll('.miolo-spec');
    let totalPaginas = 0;
    let hasCouche = false;
    let messages = [];
    let adjustments = false;

    let hasValues = false;
    mioloSections.forEach((section) => {
        const pages = section.querySelector('[id^="quantidadePaginas"]')?.value;
        if (pages && pages !== '') {
            hasValues = true;
        }
    });

    if (!hasValues) {
        return [];
    }

    mioloSections.forEach((section) => {
        const pagesInput = section.querySelector('[id^="quantidadePaginas"]');
        let pages = parseInt(pagesInput?.value) || 0;
        const papel = section.querySelector('[id^="papel"]')?.value || '';

        // Adjust odd pages to even
        if (pages % 2 !== 0) {
            pages += 1;
            pagesInput.value = pages;
            adjustments = true;
        }
        totalPaginas += pages;

        // Check for Couche paper
        if (papel.includes('Couche')) {
            hasCouche = true;
        }
    });

    const tipoProduto = document.getElementById('tipoProduto').value;
    const tipoAcabamento = document.getElementById('tipoAcabamento');

    if (adjustments) {
        messages.push('O número de páginas foi ajustado automaticamente para um número par.');
    }

    // Add Couche paper validation
    if (hasCouche) {
        if (!['Costurado', 'Grampo'].includes(tipoAcabamento.value)) {
            tipoAcabamento.value = 'Costurado';
            messages.push('Como há papel Couché, o acabamento foi alterado para Costurado.');
        }
    }

    switch(tipoProduto) {
        case 'Livreto Grampeado':
            if (totalPaginas > 36) {
                messages.push('Livreto grampeado não pode ter mais de 36 páginas no total.');
            }
            if (totalPaginas % 4 !== 0) {
                const adjustment = 4 - (totalPaginas % 4);
                const lastSection = mioloSections[mioloSections.length - 1];
                const lastPagesInput = lastSection.querySelector('[id^="quantidadePaginas"]');
                const currentPages = parseInt(lastPagesInput.value);
                lastPagesInput.value = currentPages + adjustment;
                messages.push(`O número total de páginas foi ajustado para ${totalPaginas + adjustment} (múltiplo de 4).`);
            }
            break;
            
        case 'Livro':
            if (totalPaginas < 36) {
                messages.push('Livro não pode ter menos de 36 páginas no total.');
            }
            break;
    }

    return messages;
}

document.addEventListener('change', function(e) {
    if (e.target.matches('[id^="quantidadePaginas"]')) {
        const messages = validateAllMioloPages();
        if (messages.length > 0) {
            showStyledPopup(messages.join('\n'));
            calcularPreco();
        }
    }
});

document.querySelector('.update-button').addEventListener('click', function() {
    calcularPreco();
});

document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', calcularPreco);
    element.addEventListener('change', calcularPreco);
});



document.querySelectorAll('input[name="tipoCliente"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const dadosEditora = document.getElementById('dadosEditora');
        if (this.value === 'editora') {
            dadosEditora.style.display = 'block';
        } else {
            dadosEditora.style.display = 'none';
        }
        calcularPreco();
    });
});

/**
 * Listener que monitora mudanças no tipo de produto
 * Ajusta as opções disponíveis de acabamento e capa conforme o produto selecionado
 */
document.getElementById('tipoProduto').addEventListener('change', function() {
    const tipoProduto = this.value;
    const tipoAcabamento = document.getElementById('tipoAcabamento');

    // Reset and disable options
    Array.from(tipoAcabamento.options).forEach(option => {
        option.disabled = false;
    });

    switch(tipoProduto) {
        case 'Livreto Grampeado':
            // Disable all but grampo for acabamento
            Array.from(tipoAcabamento.options).forEach(option => {
                if (option.value !== 'Grampo') {
                    option.disabled = true;
                }
            });
            tipoAcabamento.value = 'Grampo';
            
            // Disable capa dura option for livreto grampeado
            Array.from(tipoCapa.options).forEach(option => {
                if (option.value === 'Capa Dura') {
                    option.disabled = true;
                }
            });
            tipoCapa.value = 'Brochura'; // Force brochura for livreto grampeado
            break;

        case 'Livro':
            Array.from(tipoAcabamento.options).forEach(option => {
                if (!['Costurado', 'Colado (PUR)'].includes(option.value)) {
                    option.disabled = true;
                }
            });
            if (!['Costurado', 'Colado (PUR)'].includes(tipoAcabamento.value)) {
                tipoAcabamento.value = 'Costurado';
            }
            // Enable all capa options for livro initially
            Array.from(tipoCapa.options).forEach(option => {
                option.disabled = false;
            });
            
            // If acabamento is Colado (PUR), disable capa dura
            if (tipoAcabamento.value === 'Colado (PUR)') {
                Array.from(tipoCapa.options).forEach(option => {
                    if (option.value === 'Capa Dura') {
                        option.disabled = true;
                    }
                });
                if (tipoCapa.value === 'Capa Dura') {
                    tipoCapa.value = 'Brochura';
                    showStyledPopup('Para acabamento Colado (PUR), a capa não pode ser Capa Dura. Foi alterado para Lombada Quadrada.');
                }
            }
            break;

        case 'Revista':
            Array.from(tipoAcabamento.options).forEach(option => {
                if (option.value !== 'Costurado') {
                    option.disabled = true;
                }
            });
            tipoAcabamento.value = 'Costurado';
            break;

        case 'Apostila':
            Array.from(tipoAcabamento.options).forEach(option => {
                if (!['Espiral', 'Wire-o'].includes(option.value)) {
                    option.disabled = true;
                }
            });
            if (!['Espiral', 'Wire-o'].includes(tipoAcabamento.value)) {
                tipoAcabamento.value = 'Espiral';
            }
            break;
    }

    calcularPreco();
});

// Add event listener for tipoAcabamento changes:
document.getElementById('tipoAcabamento').addEventListener('change', function() {
    const tipoProduto = document.getElementById('tipoProduto').value;
    const tipoCapa = document.getElementById('tipoCapa');

    if (tipoProduto === 'Livro' && this.value === 'Colado (PUR)') {
        Array.from(tipoCapa.options).forEach(option => {
            if (option.value === 'Capa Dura') {
                option.disabled = true;
            }
        });
        if (tipoCapa.value === 'Capa Dura') {
            tipoCapa.value = 'Brochura';
            showStyledPopup('Para acabamento Colado (PUR), a capa não pode ser Capa Dura. Foi alterado para Lombada Quadrada.');
        }
    } else if (tipoProduto === 'Livro') {
        Array.from(tipoCapa.options).forEach(option => {
            option.disabled = false;
        });
    }
    calcularPreco();
});


/**
 * Listener para adicionar nova seção de miolo
 * Permite adicionar especificações para diferentes partes do livro
 */
document.getElementById('addMioloSpec').addEventListener('click', function() {
    mioloCounter++;
    const mioloSpec = document.querySelector('.miolo-spec');
    if (!mioloSpec) return;

    const newMioloSpec = mioloSpec.cloneNode(true);
    
    newMioloSpec.querySelectorAll('input, select').forEach(input => {
        input.value = '';
        input.id = input.id + mioloCounter;
        input.name = input.name + mioloCounter;
    });
    
    newMioloSpec.querySelectorAll('label').forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr) {
            label.setAttribute('for', forAttr + mioloCounter);
        }
    });
    
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('remove-miolo', 'small-button');
    removeButton.addEventListener('click', function() {
        this.closest('.miolo-spec').remove();
        mioloCounter--;
        calcularPreco();
    });
    
    const observacaoField = document.createElement('div');
    observacaoField.classList.add('form-row', );
    observacaoField.innerHTML = `
        <div class="form-column">
            
     
    `;
    
    let buttonColumn = newMioloSpec.querySelector('.button-column');
    if (!buttonColumn) {
        buttonColumn = document.createElement('div');
        buttonColumn.classList.add('button-column');
        const lastFormColumn = newMioloSpec.querySelector('.form-row .form-column:last-child');
        if (lastFormColumn) {
            lastFormColumn.after(buttonColumn);
        } else {
            newMioloSpec.querySelector('.form-row').appendChild(buttonColumn);
        }
    }
    
    buttonColumn.innerHTML = '';
    buttonColumn.appendChild(removeButton);
    
    newMioloSpec.appendChild(observacaoField);
    
    const mioloSpecifications = document.getElementById('mioloSpecifications');
    if (mioloSpecifications) {
        mioloSpecifications.appendChild(newMioloSpec);
    }
    
    newMioloSpec.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', calcularPreco);
    });

    newMioloSpec.querySelector('[id^="quantidadePaginas"]').addEventListener('change', function() {
        const messages = validateAllMioloPages();
        if (messages.length > 0) {
            showStyledPopup(messages.join('\n'));
        }
    });

    newMioloSpec.querySelector('[id^="papel"]').addEventListener('change', function() {
        const messages = validateAllMioloPages();
        if (messages.length > 0) {
            showStyledPopup(messages.join('\n'));
        }
    });

    calcularPreco();
});


document.querySelectorAll('[id^="quantidadePaginas"]').forEach(input => {
    input.addEventListener('change', function() {
        const pages = parseInt(this.value);
        if (!pages) return; 

        const tipoProduto = document.getElementById('tipoProduto').value;

        switch(tipoProduto) {
            case 'Livreto Grampeado':
                if (pages > 40) {
                    this.value = 40;
                    showStyledPopup('O Produto "Livreto grampeado" não pode ter mais de 40 páginas. troque o produto para "Livro" O valor foi ajustado automaticamente.');
                }
                break;

            case 'Livro':
                if (pages < 40) {
                    this.value = 40;
                    showStyledPopup('O Produto "Livro"  não pode ter menos de 40 páginas, troque o produto para "Livreto Grampeado"  O valor foi ajustado automaticamente.');
                }
                break;
        }

        // Verificar se o livro tem menos de 40 páginas e avisars
        if (pages < 40 && tipoProduto === 'Livro') {
            this.value = 40;
           
            return; // Impede que o restante do código seja executado
        }

        if (pages % 2 !== 0) {
            this.value = Math.ceil(pages / 2) * 2;
            showStyledPopup('O número de páginas não pode ser ímpar. O valor foi ajustado automaticamente.');
        }

        if (document.getElementById('tipoAcabamento').value === 'Costurado' && pages % 4 !== 0) {
            const roundedPages = Math.ceil(pages / 4) * 4;
            this.value = roundedPages;
            showStyledPopup(`O número de páginas será ajustado para ${roundedPages}. Serão inseridas páginas em branco no final do livro.`);
        }

        if (document.getElementById('tipoAcabamento').value === 'Grampo' && pages % 4 !== 0) {
            const roundedPages = Math.ceil(pages / 4) * 4;
            this.value = roundedPages;
            showStyledPopup(`O número de páginas será ajustado para ${roundedPages}. Serão inseridas páginas em branco no final do livro.`);
        }

        calcularPreco();
    });
});

function validatePages(tipoProduto, tipoAcabamento, quantidadePaginas, tiragem) {
    const messages = [];

    if (!quantidadePaginas || !tiragem) {
        return messages;
    }

    if (tiragem < 20) {
        const tiragemInput = document.getElementById('tiragem');
        tiragemInput.value = 20;
        messages.push('A quantidade mínima de tiragem é de 20 exemplares.');
    }

    return messages;
}

document.getElementById('tiragem').addEventListener('change', function() {
    const tiragem = parseInt(this.value) || 0;
    if (tiragem < 20 && tiragem !== 0) {
        this.value = 20;
        showStyledPopup('A quantidade mínima de tiragem é de 20 exemplares.');
        calcularPreco();
    }
});


document.getElementById('tipoCapa').addEventListener('change', function() {
    const tipoCapa = this.value;
    const tipoAcabamento = document.getElementById('tipoAcabamento');
    const guardasSection = document.getElementById('guardas-section');
    const tamanhoOrelha = document.getElementById('tamanhoOrelha');
    const impressaoCapa = document.getElementById('impressaoCapa');

    if (tipoCapa === 'Capa Dura') {
        guardasSection.style.display = 'block';
        tamanhoOrelha.value = 'Sem orelhas';
        tamanhoOrelha.disabled = true;
        impressaoCapa.value = 'Frente colorida';
        impressaoCapa.options[1].disabled = true;
    } else {
        guardasSection.style.display = 'none';
        tamanhoOrelha.disabled = false;
        impressaoCapa.options[1].disabled = false;
    }

    calcularPreco();
});

document.getElementById('orcamentoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão

    const form = this;

    // Captura os dados calculados
    const numeroOrcamento = document.getElementById('hiddenNumeroOrcamento').value;
    const precoUnitario = document.getElementById('precoUnitario').value;
    const precoTotal = document.getElementById('precoTotal').value;

    // Reutiliza a função que coleta os dados do miolo
    const mioloDetails = [];
    document.querySelectorAll('.miolo-spec').forEach((mioloSpec) => {
        const paginas = parseInt(mioloSpec.querySelector('[id^="quantidadePaginas"]').value) || 0;
        const papel = mioloSpec.querySelector('[id^="papel"]').value || '';
        const impressao = mioloSpec.querySelector('[id^="impressao"]').value || '';

        if (paginas > 0 && papel && impressao) {
            mioloDetails.push({
                paginas,
                papel,
                impressao: impressao === 'pb' ? 'Preto e Branco' : 'Colorida',
            });
        }
    });

    // Cria um campo oculto com os detalhes do miolo para envio
    const detalhesMioloField = document.createElement('input');
    detalhesMioloField.type = 'hidden';
    detalhesMioloField.name = 'detalhesMiolo';
    detalhesMioloField.value = JSON.stringify(mioloDetails);
    form.appendChild(detalhesMioloField);

    // Validações
    if (!numeroOrcamento) {
        alert('Erro: Número do orçamento não gerado.');
        return;
    }

    if (precoTotal <= 0) {
        alert('Erro: Preço total inválido.');
        return;
    }

    // Submissão do formulário
    form.submit();
});




document.querySelectorAll('#calculadora input, #calculadora select, #cnpjEditora, #nomeEditora').forEach(input => {
    input.addEventListener('input', calcularPreco);
});



calcularPreco();

/**
 * Exibe um popup estilizado com uma mensagem
 * @param {string} message - Mensagem a ser exibida no popup
 */
function showStyledPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'styled-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button onclick="this.closest('.styled-popup').remove()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Botão de cálculo de frete
const calculateShippingButton = document.getElementById('calculate-shipping-btn');
if (calculateShippingButton) {
    calculateShippingButton.addEventListener('click', function () {
        console.log('Botão Calcular Frete clicado!'); // Diagnóstico
        
        // Obtenha os valores necessários
        const tiragemElement = document.getElementById('tiragem');
        const paginasElement = document.getElementById('quantidadePaginas1');
        const larguraElement = document.getElementById('largura-input');
        const alturaElement = document.getElementById('altura-input');
        const papelElement = document.getElementById('papel1');
        const cepDestino = document.getElementById('cepDestino')?.value;

        // Verifique se todos os elementos estão disponíveis
        if (
            tiragemElement &&
            paginasElement &&
            larguraElement &&
            alturaElement &&
            papelElement &&
            cepDestino
        ) {
            // Calcule os valores necessários
            const totalPages = parseInt(paginasElement.value, 10) || 0;
            const paperType = papelElement.value || 'Offset 75g/m²';
            const paperWeight = parseFloat((paperType.match(/\d+/) || [75])[0]);
            const spineThickness = calcularSpineThickness(totalPages, paperType, paperWeight);
            const tiragem = parseInt(tiragemElement.value, 10) || 0;
            const formato = `${larguraElement.value}x${alturaElement.value}`;

            // Chame a função calculateShipping com os argumentos
            calculateShipping(tiragem, spineThickness, formato);
        } else {
            console.error('Um ou mais elementos necessários estão ausentes.');
            alert('Preencha todos os campos obrigatórios para calcular o frete.');
        }
    });
} else {
    console.error('Botão de cálculo de frete não encontrado!');
}


function calculateShipping(tiragem, spineThickness, formato) {
    console.log('Cálculo de frete iniciado!');

    const cepDestino = document.getElementById('cepDestino')?.value;
    if (!cepDestino || cepDestino.length !== 9) {
        console.error('CEP de destino não foi preenchido ou é inválido.');
        alert('Por favor, insira um CEP válido.');
        return;
    }

    // Simulação de dimensões padrão
    const caixaPadrao = {
        height: 30, 
        width: 36,  
        length: 25, 
        weight: 30, 
    };

    const totalPages = parseInt(document.getElementById('quantidadePaginas1')?.value, 10) || 0;
    const paperType = document.getElementById('papel1')?.value || 'Offset 75g/m²';
    const paperWeightPerPage = parseFloat((paperType.match(/\d+/) || [75])[0]) / 1000;
    const pageArea = (parseInt(formato.split('x')[0], 10) / 1000) * (parseInt(formato.split('x')[1], 10) / 1000);
    const pageWeight = pageArea * paperWeightPerPage;
    const totalWeight = tiragem * totalPages * pageWeight;

    const numCaixas = Math.ceil(totalWeight / caixaPadrao.weight);
    const pesoPorCaixa = totalWeight / numCaixas;

    console.log(`Tiragem: ${tiragem}`);
    console.log(`Formato: ${formato}`);
    console.log(`Peso total: ${totalWeight.toFixed(3)} kg`);
    console.log(`Peso por caixa: ${pesoPorCaixa.toFixed(3)} kg`);

    const data = {
        from: { postal_code: '03131010' },
        to: { postal_code: cepDestino },
        package: {
            height: caixaPadrao.height,
            width: caixaPadrao.width,
            length: caixaPadrao.length,
            weight: pesoPorCaixa.toFixed(3),
        },
    };

    fetch('http://localhost:8000/api/calcular-frete/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Resposta do Django:', data);
            updateShippingPrices(data);
        })
        .catch((error) => {
            console.error('Erro ao calcular o frete:', error);
        });
}


function updateShippingPrices(data) {
    const shippingResultsDiv = document.getElementById('shipping-results');
    shippingResultsDiv.innerHTML = ''; // Limpar resultados anteriores

    let html = '<h4>Opções de Frete:</h4>';

    // Adicionar a opção de Retirada no Local
    html += `
        <div class="shipping-option">
            <input type="checkbox" id="retirada-local" name="shipping-method" value="0">
            <label for="retirada-local">
                <span class="shipping-name">Retirada no Local</span>: 
                <span class="shipping-price">Grátis</span>
                <span class="shipping-time">(Rua Orfanato, 1205, Vila Prudente - SP)</span>
            </label>
        </div>
    `;

    // Adicionar opções de frete calculadas pela API
    if (Array.isArray(data) && data.length > 0) {
        data.forEach((option, index) => {
            const companyLogo = option.company?.picture || 'https://via.placeholder.com/50';
            const companyName = option.company?.name || 'Transportadora';
            const shippingName = option.name || 'Opção de frete desconhecida';
            const shippingPrice = option.price ? `R$ ${parseFloat(option.price).toFixed(2)}` : 'R$ NaN';
            const deliveryTime = option.delivery_time ? `${option.delivery_time} dias úteis` : '? dias úteis';

            html += `
                <div class="shipping-option">
                    <input type="checkbox" id="shipping-${index}" name="shipping-method" value="${option.price}">
                    <label for="shipping-${index}">
                        <img src="${companyLogo}" alt="${companyName}" class="company-logo">
                        <span class="shipping-name">${companyName} ${shippingName}</span>: 
                        <span class="shipping-price">${shippingPrice}</span>
                        <span class="shipping-time">(${deliveryTime})</span>
                    </label>
                </div>
            `;
        });
    } else {
        html += '<p class="no-shipping-options">Nenhuma opção de frete disponível.</p>';
    }

    shippingResultsDiv.innerHTML = html;
}


function atualizarValor(campo) {
    // Atualiza o campo de texto com o valor do slider
    const slider = document.getElementById(campo);
    const input = document.getElementById(`${campo}-input`);
    input.value = slider.value;

    // Atualiza o formato selecionado
    atualizarFormato();
}

function atualizarSlider(campo) {
    // Atualiza o slider com o valor do campo de texto
    const input = document.getElementById(`${campo}-input`);
    const slider = document.getElementById(campo);
    slider.value = input.value;

    // Atualiza o formato selecionado
    atualizarFormato();
}

function atualizarFormato() {
    // Captura os valores de largura e altura
    const largura = document.getElementById("largura").value;
    const altura = document.getElementById("altura").value;

    // Exibe o formato selecionado
    const formato = `${largura}x${altura}`;
    document.getElementById("formato-selecionado").innerText = formato;
}

function updateSummary(
    tiragem,
    totalPaginas,
    precoTotalPorExemplar,
    totalPrecoFinal,
    spineThickness,
    mioloDetails,
    tipoCliente,
    cnpjEditora,
    nomeEditora,
    custoAcabamentoUnitario,
    guardasPreco,
    tipoAcabamento
) {
    // Capturar informações gerais
    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const telefone = document.getElementById('telefone')?.value || '';
    const tipoProva = document.getElementById('tipoProva')?.value || '';

    // Formato (dinâmico: pode ser calculado ou capturado de um campo)
    const largura = document.getElementById('largura-input')?.value || 140; // Largura padrão
    const altura = document.getElementById('altura-input')?.value || 210;  // Altura padrão
    const formato = `${largura}x${altura}`;

    // Aplicar desconto de 5% caso seja editora
    let descontoEditora = 0;
    if (tipoCliente === 'Editora') {
        descontoEditora = totalPrecoFinal * 0.05; // 5% de desconto
        totalPrecoFinal *= 0.95; // Atualizar o total com desconto
    }

    // Detalhes do cliente
    let clienteInfo = `
        <div class="summary-item"><strong>Tipo de Cliente:</strong> <span>${tipoCliente}</span></div>
    `;
    if (tipoCliente === 'Editora') {
        clienteInfo += `
            <div class="summary-item"><strong>CNPJ da Editora:</strong> <span>${cnpjEditora}</span></div>
            <div class="summary-item"><strong>Nome da Editora:</strong> <span>${nomeEditora}</span></div>
        `;
    }

    // Miolo: Detalhes dinâmicos
    let mioloHtml = mioloDetails.map((miolo, index) => `
        <div class="summary-item"><strong>Miolo ${index + 1}:</strong></div>
        <div class="summary-item"><strong>Páginas:</strong> <span>${miolo.paginas}</span></div>
        <div class="summary-item"><strong>Papel:</strong> <span>${miolo.papel}</span></div>
        <div class="summary-item"><strong>Impressão:</strong> <span>${miolo.impressao}</span></div>
    `).join('');

    // Acabamentos Especiais
    let specialFinishesHtml = '';
    const specialFinishes = [
        { id: 'vernizUV', name: 'Verniz UV com Reserva', cost: 500 },
        { id: 'softTouch', name: 'Soft Touch', cost: 500 },
        { id: 'hotStamp', name: 'Hot Stamp', cost: 1300 },
        { id: 'relevo', name: 'Relevo', cost: 500 },
        { id: 'sobreCapa', name: 'Sobre Capa', cost: 6 },
        { id: 'acetato', name: 'Acetato', cost: 3 }
    ];
    specialFinishes.forEach(finish => {
        if (document.getElementById(finish.id)?.checked) {
            let cost = finish.id === 'sobreCapa' || finish.id === 'acetato'
                ? finish.cost * tiragem
                : finish.cost * Math.ceil(tiragem / 1000);
            specialFinishesHtml += `
                <div class="summary-item"><strong>${finish.name}:</strong> <span>Sim (Custo: R$ ${cost.toFixed(2)})</span></div>
            `;
        }
    });

    // Gerar resumo dinâmico
    document.getElementById('resumoOrcamento').innerHTML = `
        <div class="summary-section">
            <h3>Pedido</h3>
            <div class="summary-item"><strong>Pedido Nº:</strong> <span>${document.getElementById('numero-orcamento')?.textContent || ''}</span></div>
        </div>
        <div class="summary-section">
            <h3>Informações Gerais</h3>
            <div class="summary-item"><strong>Nome:</strong> <span>${nome}</span></div>
            <div class="summary-item"><strong>Email:</strong> <span>${email}</span></div>
            <div class="summary-item"><strong>Telefone:</strong> <span>${telefone}</span></div>
            ${clienteInfo}
        </div>
        <div class="summary-section">
            <h3>Detalhes do Produto</h3>
            <div class="summary-item"><strong>Produto:</strong> <span>${document.getElementById('tipoProduto')?.value || ''}</span></div>
            <div class="summary-item"><strong>Acabamento:</strong> <span>${tipoAcabamento}</span></div>
            <div class="summary-item"><strong>Tiragem:</strong> <span>${tiragem}</span></div>
            <div class="summary-item"><strong>Formato:</strong> <span>${formato}</span></div>
            <div class="summary-item"><strong>Título:</strong> <span>${document.getElementById('titulo')?.value || ''}</span></div>
            <div class="summary-item"><strong>ISBN:</strong> <span>${document.getElementById('isbn')?.value || ''}</span></div>
            <div class="summary-item"><strong>Tipo de Prova:</strong> <span>${tipoProva}</span></div>
        </div>
        <div class="summary-section">
            <h3>Especificações da Capa</h3>
            <div class="summary-item"><strong>Tipo de Capa:</strong> <span>${document.getElementById('tipoCapa')?.value || ''}</span></div>
            <div class="summary-item"><strong>Papel da Capa:</strong> <span>${document.getElementById('papelCapa')?.value || ''}</span></div>
            ${document.getElementById('tipoCapa')?.value === "Capa Dura" 
                ? `<div class="summary-item"><strong>Tipo de Guardas:</strong> <span>${document.getElementById('tipoGuardas')?.value || ''}</span></div>` 
                : ''}
            <div class="summary-item"><strong>Tipo de Laminação:</strong> <span>${document.getElementById('tipoLaminacao')?.value || ''}</span></div>
            <div class="summary-item"><strong>Tamanho da Orelha:</strong> <span>${document.getElementById('tamanhoOrelha')?.value || ''}</span></div>
            <div class="summary-item"><strong>Impressão da Capa:</strong> <span>${document.getElementById('impressaoCapa')?.value || ''}</span></div>
            <div class="summary-item"><strong>Tamanho da Lombada:</strong> <span>${spineThickness} mm</span></div>
        </div>
        <div class="summary-section">
            <h3>Acabamentos Especiais</h3>
            ${specialFinishesHtml || '<div class="summary-item">Nenhum acabamento especial selecionado</div>'}
        </div>
        <div class="summary-section">
            <h3>Especificações do Miolo</h3>
            ${mioloHtml}
            <div class="summary-item"><strong>Total de Páginas:</strong> <span>${totalPaginas}</span></div>
        </div>
        <div class="summary-section">
            <h3>Preços</h3>
            <div class="summary-item"><strong>Preço Unitário:</strong> <span>R$ ${precoTotalPorExemplar.toFixed(2)}</span></div>
            ${tipoProva === "Fisica" ? `<div class="summary-item"><strong>Prova Física:</strong> <span>R$ 250,00</span></div>` : ''}
            ${descontoEditora > 0 
                ? `<div class="summary-item"><strong>Desconto Editora (5%):</strong> <span>-R$ ${descontoEditora.toFixed(2)}</span></div>` 
                : ''}
            <div class="summary-item"><strong>Preço Total:</strong> <span>R$ ${totalPrecoFinal.toFixed(2)}</span></div>
        </div>
    `;
}


// Script Flyer 

// Tab switching
document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.querySelectorAll('.tab-content')[index].classList.add('active');
    });
  });
  
  // Função para atualizar o preço
  function atualizarPreco() {
    let precoBase = 50; // Preço base inicial
    const formato = document.querySelector('[data-type="format"]').value;
    const papel = document.querySelector('[data-type="paper"]').value;
    const cores = document.querySelector('[data-type="colors"]').value;
    const quantidade = parseInt(document.querySelector('[data-type="quantity"]').value);
    
    // Multiplicadores de formato
    const formatosMultiplicadores = {
      '100x148': 1,
      '105x148': 1,
      '100x200': 1.2,
      '100x210': 1.2,
      '148x200': 1.4,
      '148x210': 1.4,
      '210x297': 1.8,
      '298x406': 2.2,
      '297x420': 2.2
    };
    
    // Multiplicadores de papel
    const papeisMultiplicadores = {
      'offset75': 1,
      'offset90': 1.1,
      'offset120': 1.2,
      'couche90': 1.3,
      'couche115': 1.4,
      'couche150': 1.5,
      'couche170': 1.6,
      'couche250': 1.8
    };
    
    // Multiplicadores de cores
    const coresMultiplicadores = {
      '4x0': 1.5,
      '4x4': 2,
      '1x0': 1,
      '1x1': 1.3
    };
    
    // Multiplicadores de quantidade
    const quantidadeMultiplicadores = {
      50: 1,
      100: 1.5,
      250: 2,
      500: 3,
      1000: 5,
      2500: 10,
      5000: 18,
      10000: 32
    };
    
    // Aplicar multiplicadores
    precoBase *= formatosMultiplicadores[formato] || 1;
    precoBase *= papeisMultiplicadores[papel] || 1;
    precoBase *= coresMultiplicadores[cores] || 1;
    precoBase *= quantidadeMultiplicadores[quantidade] || 1;
    
    // Calcular preço unitário
    const precoUnitario = precoBase / quantidade;
    
    // Atualizar displays de preço
    document.querySelector('.total-price').textContent = 
      `R$ ${precoBase.toFixed(2).replace('.', ',')}`;
    document.querySelector('.unit-price span').textContent = 
      `R$ ${precoUnitario.toFixed(2).replace('.', ',')}`;
      

  }
  
   // Função que altera a imagem conforme a cor selecionada
document.getElementById('color-selector').addEventListener('change', function() {
var selectedColor = this.value; // Valor da cor selecionada
var imagePath = '/static/img/flyer/flyer' + selectedColor + '.png'; // Caminho da imagem

// Alterando o src da imagem
document.getElementById('flyer-preview').src = imagePath;
});
  
  // Atualizar event listeners
  document.querySelectorAll('.option-select').forEach(select => {
    select.addEventListener('change', atualizarPreco);
  });
  
  // Chamar função inicial
  atualizarPreco();
  
  // File upload handling
  document.querySelector('.file-upload input').addEventListener('change', function(e) {
    const filesDiv = document.querySelector('.uploaded-files');
    filesDiv.innerHTML = '';
    
    Array.from(this.files).forEach(file => {
      const fileDiv = document.createElement('div');
      fileDiv.className = 'uploaded-file';
      fileDiv.innerHTML = `
        <span>${file.name}</span>
        <span class="remove-file">×</span>
      `;
      filesDiv.appendChild(fileDiv);
      
      fileDiv.querySelector('.remove-file').addEventListener('click', () => {
        fileDiv.remove();
      });
    });
  });
  
  // Shipping calculator functionality
  const shippingButton = document.querySelector('.shipping-calculator-button');
  const shippingForm = document.querySelector('.shipping-form');
  const shippingInput = document.querySelector('.shipping-input');
  const shippingSubmit = document.querySelector('.shipping-submit');
  const shippingResult = document.querySelector('.shipping-result');
  const shippingOptions = document.querySelector('.shipping-options');
  
  shippingButton.addEventListener('click', () => {
    shippingForm.classList.toggle('active');
  });
  
  shippingInput.addEventListener('input', (e) => {
    // Allow only numbers
    e.target.value = e.target.value.replace(/\D/g, '');
  });
  
  shippingSubmit.addEventListener('click', () => {
    const cep = shippingInput.value;
    if (cep.length !== 8) {
      alert('Por favor, digite um CEP válido');
      return;
    }
    
    // Simulate shipping calculation
    calculateShipping(cep);
  });
  
  function calculateShipping(cep) {
    // Simulate API call with loading state
    shippingOptions.innerHTML = '<p>Calculando...</p>';
    shippingResult.classList.add('active');
    
    // Simulate response delay
    setTimeout(() => {
      const options = [
        { service: 'PAC', price: 25.90, days: 8 },
        { service: 'SEDEX', price: 45.90, days: 3 }
      ];
      
      shippingOptions.innerHTML = options.map(option => `
        <div style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${option.service}</strong><br>
          R$ ${option.price.toFixed(2).replace('.', ',')} - 
          Entrega em até ${option.days} dias úteis
        </div>
      `).join('');
    }, 1000);
  }
  
  // Add to cart button
  document.querySelector('.add-to-cart').addEventListener('click', () => {
    const filesUploaded = document.querySelector('.uploaded-files').children.length > 0;
    if (!filesUploaded) {
      alert('Por favor, envie seus arquivos antes de prosseguir.');
      return;
    }
    // Implement your checkout functionality here
    alert('Prosseguindo para a finalização do pedido...');
  });
  
  // Initial price update
  atualizarPreco();


  // script flyer  *\

            // Tab switching
            document.querySelectorAll('.tab').forEach((tab, index) => {
                tab.addEventListener('click', () => {
                  // Remove active class from all tabs and contents
                  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                  
                  // Add active class to clicked tab and corresponding content
                  tab.classList.add('active');
                  document.querySelectorAll('.tab-content')[index].classList.add('active');
                });
              });
              
              // Função para atualizar o preço
              function atualizarPreco() {
                let precoBase = 50; // Preço base inicial
                const formato = document.querySelector('[data-type="format"]').value;
                const papel = document.querySelector('[data-type="paper"]').value;
                const cores = document.querySelector('[data-type="colors"]').value;
                const quantidade = parseInt(document.querySelector('[data-type="quantity"]').value);
                
                // Multiplicadores de formato
                const formatosMultiplicadores = {
                  '100x148': 1,
                  '105x148': 1,
                  '100x200': 1.2,
                  '100x210': 1.2,
                  '148x200': 1.4,
                  '148x210': 1.4,
                  '210x297': 1.8,
                  '298x406': 2.2,
                  '297x420': 2.2
                };
                
                // Multiplicadores de papel
                const papeisMultiplicadores = {
                  'offset75': 1,
                  'offset90': 1.1,
                  'offset120': 1.2,
                  'couche90': 1.3,
                  'couche115': 1.4,
                  'couche150': 1.5,
                  'couche170': 1.6,
                  'couche250': 1.8
                };
                
                // Multiplicadores de cores
                const coresMultiplicadores = {
                  '4x0': 1.5,
                  '4x4': 2,
                  '1x0': 1,
                  '1x1': 1.3
                };
                
                // Multiplicadores de quantidade
                const quantidadeMultiplicadores = {
                  50: 1,
                  100: 1.5,
                  250: 2,
                  500: 3,
                  1000: 5,
                  2500: 10,
                  5000: 18,
                  10000: 32
                };
                
                // Aplicar multiplicadores
                precoBase *= formatosMultiplicadores[formato] || 1;
                precoBase *= papeisMultiplicadores[papel] || 1;
                precoBase *= coresMultiplicadores[cores] || 1;
                precoBase *= quantidadeMultiplicadores[quantidade] || 1;
                
                // Calcular preço unitário
                const precoUnitario = precoBase / quantidade;
                
                // Atualizar displays de preço
                document.querySelector('.total-price').textContent = 
                  `R$ ${precoBase.toFixed(2).replace('.', ',')}`;
                document.querySelector('.unit-price span').textContent = 
                  `R$ ${precoUnitario.toFixed(2).replace('.', ',')}`;
                  
    
              }
              
               // Função que altera a imagem conforme a cor selecionada
      document.getElementById('color-selector').addEventListener('change', function() {
        var selectedColor = this.value; // Valor da cor selecionada
        var imagePath = '/static/img/flyer/flyer' + selectedColor + '.png'; // Caminho da imagem
    
        // Alterando o src da imagem
        document.getElementById('flyer-preview').src = imagePath;
      });
              
              // Atualizar event listeners
              document.querySelectorAll('.option-select').forEach(select => {
                select.addEventListener('change', atualizarPreco);
              });
              
              // Chamar função inicial
              atualizarPreco();
              
              // File upload handling
              document.querySelector('.file-upload input').addEventListener('change', function(e) {
                const filesDiv = document.querySelector('.uploaded-files');
                filesDiv.innerHTML = '';
                
                Array.from(this.files).forEach(file => {
                  const fileDiv = document.createElement('div');
                  fileDiv.className = 'uploaded-file';
                  fileDiv.innerHTML = `
                    <span>${file.name}</span>
                    <span class="remove-file">×</span>
                  `;
                  filesDiv.appendChild(fileDiv);
                  
                  fileDiv.querySelector('.remove-file').addEventListener('click', () => {
                    fileDiv.remove();
                  });
                });
              });
              
              
              // Add to cart button
              document.querySelector('.add-to-cart').addEventListener('click', () => {
                const filesUploaded = document.querySelector('.uploaded-files').children.length > 0;
                if (!filesUploaded) {
                  alert('Por favor, envie seus arquivos antes de prosseguir.');
                  return;
                }
                // Implement your checkout functionality here
                alert('Prosseguindo para a finalização do pedido...');
              });
              
              // Initial price update
              atualizarPreco();