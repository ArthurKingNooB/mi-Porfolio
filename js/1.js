document.querySelectorAll('.habilidad').forEach(el => {
    const stars = parseInt(el.dataset.stars);
    const estrellas = '★'.repeat(stars) + '☆'.repeat(5 - stars);
    el.querySelector('.estrellas').textContent = estrellas;
  });
