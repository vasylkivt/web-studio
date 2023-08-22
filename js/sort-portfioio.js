const filterButtonsList = document.querySelector('.js-btn-filter-list');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtonsList.addEventListener('click', e => {
  const currentBtn = e.target;

  const datasetFilter = e.target.dataset.filter;

  if (datasetFilter) {
    portfolioItems.forEach(item => {
      if (
        datasetFilter === 'all' ||
        item.getAttribute('data-category') === datasetFilter
      ) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  document
    .querySelectorAll('.filter-btns')
    .forEach(btn => btn.classList.remove('active'));

  currentBtn.classList.add('active');
  currentBtn.blur();
});
