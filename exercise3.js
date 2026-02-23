const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBar.addEventListener('click', function (event) {

  if (!event.target.matches('.filter-btn')) return;

  const selectedBtn = event.target;
  const filterValue = selectedBtn.dataset.filter;

  filterBtns.forEach(btn => btn.classList.remove('active'));
  selectedBtn.classList.add('active');

  cards.forEach(card => {
    const category = card.dataset.category;

    if (filterValue === 'all') {
      card.classList.remove('hidden');
    } else {
      card.classList.toggle('hidden', category !== filterValue);
    }
  });
});