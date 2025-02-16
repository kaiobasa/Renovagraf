// calculator.js
import { formatCurrency } from './utils.js';

export function calculatePrice(basePrice, quantity, multiplier) {
    return basePrice * quantity * multiplier;
}

export function updatePriceDisplay(totalPrice, unitPrice) {
    document.querySelector('.total-price').textContent = formatCurrency(totalPrice);
    document.querySelector('.unit-price span').textContent = formatCurrency(unitPrice);
}