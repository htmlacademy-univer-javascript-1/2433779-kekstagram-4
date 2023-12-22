const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');
const buttons = document.querySelectorAll('.img-filters__button');

const removeActiveClass = () => {
  buttons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const clickDefaultFilter = (cb) => {
  defaultFilterButton.addEventListener('click', () => {
    removeActiveClass();
    defaultFilterButton.classList.add('img-filters__button--active');
    cb();
  });
};

const clickRandomFilter = (cb) => {
  randomFilterButton.addEventListener('click', () => {
    removeActiveClass();
    randomFilterButton.classList.add('img-filters__button--active');
    cb();
  });
};

const clickDiscussedFilter = (cb) => {
  discussedFilterButton.addEventListener('click', () => {
    removeActiveClass();
    discussedFilterButton.classList.add('img-filters__button--active');
    cb();
  });
};

export {clickDefaultFilter, clickRandomFilter, clickDiscussedFilter};
