let index = 0;

function mostrarSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % slides.length;
}

setInterval(mostrarSlides, 3000); // Troca a imagem a cada 3 segundos
mostrarSlides(); // Mostra a primeira imagem

// Filtro de categorias
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all items
    document.querySelectorAll('.category-item').forEach(i => {
      i.classList.remove('active');
    });

    // Add active class to clicked item
    this.classList.add('active');

    // Filter logic would go here
    // This is just a placeholder for demonstration
    const category = this.textContent;
    console.log(`Filtering by: ${category}`);
  });
});

// Product buttons
document.querySelectorAll('.product-button').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.parentElement.querySelector('.product-title').textContent;
    window.location.href = `/loja/produto/${productName.toLowerCase().replace(/\s+/g, '-')}`;
  });
});
