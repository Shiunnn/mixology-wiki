document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const recipeCards = Array.from(document.querySelectorAll('.recipe-card'));
  const searchInput = document.getElementById('search-input');
  const emptyState = document.getElementById('empty-state');
  const recipeCount = document.getElementById('recipe-count');

  if (!recipeCards.length) return;

  let activeBase = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    let visibleCount = 0;

    recipeCards.forEach((card) => {
      const baseList = (card.dataset.base || '')
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

      const matchesBase = activeBase === 'all' || baseList.includes(activeBase);
      const cardText = `${card.textContent} ${card.dataset.ingredients || ''}`.toLowerCase();
      const matchesSearch = !searchQuery || cardText.includes(searchQuery);
      const isVisible = matchesBase && matchesSearch;

      card.classList.toggle('is-hidden', !isVisible);
      if (isVisible) visibleCount += 1;
    });

    if (recipeCount) {
      recipeCount.textContent = `顯示 ${visibleCount} / ${recipeCards.length} 款調酒`;
    }

    if (emptyState) {
      emptyState.classList.toggle('is-hidden', visibleCount > 0);
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeBase = (button.dataset.filter || 'all').toLowerCase();

      filterButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchQuery = event.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  applyFilters();
});

