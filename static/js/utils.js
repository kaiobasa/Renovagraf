// utils.js
export function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

export function showStyledPopup(message) {
    const existingPopup = document.querySelector('.styled-popup');
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement('div');
    popup.className = 'styled-popup';
    popup.innerHTML = `
        <div>${message}</div>
        <button class="popup-close">OK</button>
    `;
    document.body.appendChild(popup);

    popup.querySelector('.popup-close').addEventListener('click', () => {
        popup.remove();
    });
}