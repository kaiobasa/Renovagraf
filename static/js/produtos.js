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