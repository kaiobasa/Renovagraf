
document.getElementById('tipoProduto').addEventListener('change', function() {
    const tipoProduto = this.value;
    const tipoAcabamento = document.getElementById('tipoAcabamento');
    const tipoCapa = document.getElementById('tipoCapa');
    
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
                    showStyledPopup('Para acabamento Colado (PUR), a capa não pode ser Capa Dura. Foi alterado para Brochura.');
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

// Add paper type change event listener
document.querySelectorAll('[id^="papel"]').forEach(select => {
    select.addEventListener('change', function() {
        const tipoProduto = document.getElementById('tipoProduto').value;
        const tipoAcabamento = document.getElementById('tipoAcabamento');
        const papelSelecionado = this.value;

        if (tipoProduto === 'Livro' && papelSelecionado.includes('Couche')) {
            Array.from(tipoAcabamento.options).forEach(option => {
                if (option.value !== 'Costurado') {
                    option.disabled = true;
                }
            });
            tipoAcabamento.value = 'Costurado';
            showStyledPopup('Para livros com papel Couché, o acabamento deve ser Costurado.');
        }
    });
});

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
                    showStyledPopup('Para acabamento Colado (PUR), a capa não pode ser Capa Dura. Foi alterado para Brochura.');
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
            showStyledPopup('Para acabamento Colado (PUR), a capa não pode ser Capa Dura. Foi alterado para Brochura.');
        }
    } else if (tipoProduto === 'Livro') {
        Array.from(tipoCapa.options).forEach(option => {
            option.disabled = false;
        });
    }
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

document.getElementById('addMioloSpec').addEventListener('click', function() {
    const tipoAcabamento = document.getElementById('tipoAcabamento').value; // Supõe-se que há um campo para tipo de acabamento
    let totalPaginas = 0;

    

    // Atualiza o total de páginas somando todas as páginas dos miolos existentes
    document.querySelectorAll('.miolo-spec input[name^="paginas"]').forEach(input => {
        totalPaginas += parseInt(input.value) || 0;
    });

    // Verifica se o tipo de acabamento é "costurado" ou "grampo"
    if (tipoAcabamento === 'costurado' || tipoAcabamento === 'grampo') {
        // Verifica se o total de páginas é múltiplo de 4, caso contrário, bloqueia a adição
        if (totalPaginas % 4 !== 0) {
            alert('O total de páginas precisa ser múltiplo de 4 para este tipo de acabamento. Ajuste o número de páginas para prosseguir.');
            return; // Bloqueia a adição do novo miolo
        }
    }

    // Incrementa o contador do miolo
    mioloCounter++;

    const mioloSpec = document.querySelector('.miolo-spec');
    if (!mioloSpec) return;

    const newMioloSpec = mioloSpec.cloneNode(true);

    // Limpa os campos de entrada e define novos IDs para evitar conflitos
    newMioloSpec.querySelectorAll('input, select').forEach(input => {
        input.value = '';
        input.id = input.id + mioloCounter;
        input.name = input.name + mioloCounter;
    });

    // Ajusta os atributos "for" das labels para correspondência com os novos IDs
    newMioloSpec.querySelectorAll('label').forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr) {
            label.setAttribute('for', forAttr + mioloCounter);
        }
    });

    // Cria o botão de remoção para o miolo atual
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '-';
    removeButton.classList.add('remove-miolo', 'small-button');
    removeButton.addEventListener('click', function() {
        this.closest('.miolo-spec').remove();
        mioloCounter--;
        calcularPreco();
    });

    // Campo para observação de páginas coloridas
    const observacaoField = document.createElement('div');
    observacaoField.classList.add('form-row', 'observacao-field');
    observacaoField.innerHTML = `
        <div class="form-column">
            <label for="observacao${mioloCounter}">Observação (páginas coloridas):</label>
            <textarea id="observacao${mioloCounter}" rows="2"></textarea>
        </div>
    `;

    // Adiciona o botão de remoção na coluna correspondente
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

    // Escuta para mudanças de entrada, atualizando o preço automaticamente
    newMioloSpec.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', calcularPreco);
    });

    calcularPreco();
});



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
}

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

    
    const shrinkPrecos = {
        "Individual": 1.00,
        "Coletivo": 0
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
    
    function atualizarNumeroOrcamento() {
        const numeroOrcamentoElement = document.getElementById('numeroOrcamento');
        if (numeroOrcamentoElement) {
            numeroOrcamentoElement.value = `ORC${String(numeroOrcamentoAtual).padStart(5, '0')}`;
        }
        numeroOrcamentoAtual++;
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
    
    function calcularSpineThickness(totalPaginas, papelTipo, gramaturaBase) {
        const espessuraPorFolha = {
            'Offset': 0.00208,
            'Polen': 0.00208,
            'Couche': 0.00185
        };
    
        let tipoBase = 'Offset';
        if (papelTipo.includes('Polen')) {
            tipoBase = 'Polen';
        } else if (papelTipo.includes('Couche')) {
            tipoBase = 'Couche';
        }
    
        const espessuraBase = espessuraPorFolha[tipoBase];
        const gramatura = parseInt(gramaturaBase);
        const fatorGramatura = gramatura / 75;
    
        const espessuraTotal = (totalPaginas / 2) * espessuraBase * fatorGramatura;
        return espessuraTotal.toFixed(2);
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
            basePrice += 10.00;
        }
    
        return parseFloat(basePrice.toFixed(3));
    }
    
    
    function calcularPreco() {
    const tiragem = parseInt(document.getElementById('tiragem').value) || 0;
    const tipoAcabamento = document.getElementById('tipoAcabamento').value;
    const custoAcabamentoUnitario = custoAcabamento[tipoAcabamento] || 0;

    const formato = document.getElementById('formato').value;
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

    // Verificação do tipo de prova para adicionar o valor da Prova Física
    let valorProvaFisica = 0;
    const tipoProva = document.getElementById('tipoProva').value;
    if (tipoProva === 'Fisica') {
        valorProvaFisica = 50.00;
    }

    // Calcular o preço unitário com o valor da Prova Física dividida pela tiragem
    
    const precoTotalPorExemplar = totalPrecoMiolo + coverPrice + guardasPreco +  (shrinkTipo === 'Individual' ? 1.00 : 0) + custoAcabamentoUnitario;
    
    // O preço total para a tiragem
    const precoTotalTiragem = valorProvaFisica + precoTotalPorExemplar * tiragem;
    
    // O preço final inclui os custos especiais e o preço total por tiragem
    let totalPrecoFinal = precoTotalTiragem + specialsCost;

    // Aplicar o desconto de 5% se for Editora
    if (tipoCliente === 'Editora') {
        totalPrecoFinal *= 0.95; // 5% de desconto
    }

    const spineThickness = calcularSpineThickness(totalPaginas, document.getElementById('papel').value || '', (document.getElementById('papel').value.match(/\d+/) || [0])[0]);

    // Armazenar os valores unitário e total nos campos ocultos
    document.getElementById('precoUnitario').value = precoTotalPorExemplar.toFixed(2); // Adiciona o preço unitário
    document.getElementById('precoTotal').value = totalPrecoFinal.toFixed(2); // Adiciona o preço total

    // Chama a função de atualização do resumo
    updateSummary(tiragem, totalPaginas, precoTotalPorExemplar, totalPrecoFinal, spineThickness, mioloDetails, tipoCliente, cnpjEditora, nomeEditora, custoAcabamentoUnitario, guardasPreco, tipoAcabamento);
}

    
    
    function updateSummary(tiragem, totalPaginas, precoTotalPorExemplar, totalPrecoFinal, spineThickness, mioloDetails, tipoCliente, cnpjEditora, nomeEditora, custoAcabamentoUnitario, guardasPreco, tipoAcabamento) {
        let mioloHtml = mioloDetails.map((miolo, index) => `
            <div class="summary-item"><strong>Miolo ${index + 1}:</strong></div>
            <div class="summary-item"><strong>Páginas:</strong> <span>${miolo.paginas}</span></div>
            <div class="summary-item"><strong>Papel:</strong> <span>${miolo.papel}</span></div>
            <div class="summary-item"><strong>Impressão:</strong> <span>${miolo.impressao}</span></div>
           
        `).join('');
    
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const tipoProva = document.getElementById('tipoProva').value;
    
        let clienteInfo = `
            <div class="summary-item"><strong>Tipo de Cliente:</strong> <span>${tipoCliente}</span></div>
        `;
    
        if (tipoCliente === 'Editora') {
            clienteInfo += `
                <div class="summary-item"><strong>CNPJ da Editora:</strong> <span>${cnpjEditora}</span></div>
                <div class="summary-item"><strong>Nome da Editora:</strong> <span>${nomeEditora}</span></div>
            `;
        }
    
        // Add this new section for special finishes
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
    
        document.getElementById('resumoOrcamento').innerHTML = `
    <div class="summary-section">
        <h3>Pedido</h3>
        <div class="summary-item"><strong>Pedido Nº:</strong> <span>${document.getElementById('numero-orcamento').textContent}</span></div>
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
        <div class="summary-item"><strong>Produto:</strong> <span>${document.getElementById('tipoProduto').value}</span></div>
        <div class="summary-item"><strong>Acabamento:</strong> <span><strong>${tipoAcabamento}</strong></span></div>
        <div class="summary-item"><strong>Tiragem:</strong> <span><strong>${tiragem}</strong></span></div>
        <div class="summary-item"><strong>Formato:</strong> <span><strong>${document.getElementById('formato').value}</strong></span></div>
        <div class="summary-item"><strong>Título:</strong> <span>${document.getElementById('titulo').value}</span></div>
        <div class="summary-item"><strong>ISBN:</strong> <span>${document.getElementById('isbn').value}</span></div>
        <div class="summary-item"><strong>Tipo de Prova:</strong> <span><strong>${tipoProva}</strong></span></div>
    </div>
    <div class="summary-section">
        <h3>Especificações da Capa</h3>
        <div class="summary-item"><strong>Tipo de Capa:</strong> <span>${document.getElementById('tipoCapa').value}</span></div>
        <div class="summary-item"><strong>Papel da Capa:</strong> <span>${document.getElementById('papelCapa').value}</span></div>
        ${document.getElementById('tipoCapa').value === "Capa Dura" ? `<div class="summary-item"><strong>Tipo de Guardas:</strong> <span>${document.getElementById('tipoGuardas').value}</span></div>` : ''}
        <div class="summary-item"><strong>Tipo de Laminação:</strong> <span>${document.getElementById('tipoLaminacao').value}</span></div>
        <div class="summary-item"><strong>Tamanho da Orelha:</strong> <span>${document.getElementById('tamanhoOrelha').value}</span></div>
        <div class="summary-item"><strong>Impressão da Capa:</strong> <span>${document.getElementById('impressaoCapa').value}</span></div>
        
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
        <h3>Observações </h3>

        
      
               
        
    </div>
    <div class="summary-section">
        <h3>Preços </h3>
      
        <div class="summary-item"><strong>Preço Unitário:</strong> <span><strong>R$ ${precoTotalPorExemplar.toFixed(2)}</strong></span></div>
        ${document.getElementById('tipoProva').value === "Fisica" ? `<div class="summary-item"><strong>Prova Fisica:</strong> <span>  <strong> R$ 50,00 </strong>  </span></div>` : ''}
        <div class="summary-item"><strong>Preço Total:</strong> <span><strong>R$ ${totalPrecoFinal.toFixed(2)}<s/trong></span></div>
      

    </div>
`;
    }
    
    document.querySelectorAll('#calculadora input, #calculadora select, #cnpjEditora, #nomeEditora').forEach(input => {
        input.addEventListener('input', calcularPreco);
    });
    
    
    
    calcularPreco();
    
    

    

    document.querySelector('form').addEventListener('submit', function(event) {
        // Coletar os miolos como JSON
        const miolos = coletarMiolos();  // Função que coleta os detalhes dos miolos
    
        // Adicionar os miolos ao campo escondido do formulário para envio
        const miolosInput = document.createElement('input');
        miolosInput.type = 'hidden';
        miolosInput.name = 'detalhesMiolo';
        miolosInput.value = JSON.stringify(miolos);
    
        // Adicionar o campo de miolos ao formulário
        this.appendChild(miolosInput);
    
        // Coletar o número do orçamento
        const numeroOrcamento = document.getElementById('numeroOrcamento').textContent.trim();  // Garantir que o texto não tenha espaços extras
    
        // Verificar se o número de orçamento está vazio
        if (!numeroOrcamento) {
            console.error('Número de orçamento não encontrado!');
            event.preventDefault();  // Impede o envio do formulário se o número de orçamento não foi encontrado
            return;
        }
    
        // Criar o campo escondido para o número de orçamento
        const numeroOrcamentoInput = document.createElement('input');
        numeroOrcamentoInput.type = 'hidden';
        numeroOrcamentoInput.name = 'numeroOrcamento';  // Nome do campo que será usado no backend
        numeroOrcamentoInput.value = numeroOrcamento;
    
        // Adicionar o número de orçamento ao formulário
        this.appendChild(numeroOrcamentoInput);
    
        // Coletar a observação e adicionar ao campo escondido
        const observacao = document.getElementById('observacao').value;
        const observacaoInput = document.createElement('input');
        observacaoInput.type = 'hidden';
        observacaoInput.name = 'observacao';
        observacaoInput.value = observacao;
    
        // Adicionar o campo de observação ao formulário
        this.appendChild(observacaoInput);
    });
    