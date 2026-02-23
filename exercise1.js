const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {

  const trigger = event.target.closest('.accordion-trigger');

  if (!trigger) return;

  const clickedItem = trigger.closest('.accordion-item');

  const allItems = document.querySelectorAll('.accordion-item');
  allItems.forEach(item => {
    if (item !== clickedItem) {
      item.classList.remove('open');
    }
  });

  clickedItem.classList.toggle('open');
});