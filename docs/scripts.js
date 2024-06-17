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
