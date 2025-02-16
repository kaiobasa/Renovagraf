// shipping.js
import { showStyledPopup } from './utils.js';

export function calculateShipping(cep) {
    const shippingOptions = document.querySelector('.shipping-options');
    shippingOptions.innerHTML = 'Calculando...';

    // Simulação de chamada à API
    setTimeout(() => {
        const options = [
            { service: 'PAC', price: 25.90, days: 8 },
            { service: 'SEDEX', price: 45.90, days: 3 }
        ];

        shippingOptions.innerHTML = options.map(option => `
            <div>
                ${option.service}: R$ ${option.price.toFixed(2)} - 
                Entrega em até ${option.days} dias úteis
            </div>
        `).join('');
    }, 1000);
}

export function setupShippingCalculator() {
    const shippingButton = document.querySelector('.shipping-calculator-button');
    const shippingForm = document.querySelector('.shipping-form');
    const shippingInput = document.querySelector('.shipping-input');
    const shippingSubmit = document.querySelector('.shipping-submit');

    shippingButton.addEventListener('click', () => {
        shippingForm.classList.toggle('active');
    });

    shippingInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    shippingSubmit.addEventListener('click', () => {
        const cep = shippingInput.value;
        if (cep.length !== 8) {
            alert('Por favor, digite um CEP válido');
            return;
        }
        calculateShipping(cep);
    });
}