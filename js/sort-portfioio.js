document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btns');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (
          category === 'all' ||
          item.getAttribute('data-category') === category
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      this.blur();
    });
  });
});
