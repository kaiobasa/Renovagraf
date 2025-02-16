// product.js
import { calculatePrice, updatePriceDisplay } from './calculator.js';
import { setupShippingCalculator } from './shipping.js';
import { setupFileUpload } from './fileUpload.js';

export function initializeProductPage() {
    // Inicializa o cálculo de preços
    const basePrice = 50; // Exemplo de preço base
    const quantity = parseInt(document.querySelector('[data-type="quantity"]').value) || 1;
    const totalPrice = calculatePrice(basePrice, quantity, 1);
    updatePriceDisplay(totalPrice, basePrice);

    // Inicializa o cálculo de frete
    setupShippingCalculator();

    // Inicializa o upload de arquivos
    setupFileUpload();
}