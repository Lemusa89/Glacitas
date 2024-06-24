document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const expandedCard = document.querySelector('.card.expanded');
      if (expandedCard && expandedCard !== card) {
        expandedCard.classList.remove('expanded');
      }
      
      card.classList.toggle('expanded');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function updateSlider() {
    cards.forEach((card, index) => {
      const isActive = index === currentIndex;
      card.classList.toggle('active', isActive);
      card.style.transition = 'opacity 0.5s ease-in-out';
      card.style.opacity = isActive ? '1' : '0';
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  });

  // Inicializar el slider mostrando la primera tarjeta
  updateSlider();
});
