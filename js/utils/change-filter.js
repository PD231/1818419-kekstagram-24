const changeFilter = () => {
  const filtersForm = document.querySelector('.img-filters__form');
  const changeTarget = (evt) => {
    const buttonsFilter = document.querySelectorAll('.img-filters__button');
    for (let i = 0; i< buttonsFilter.length; i++) {
      buttonsFilter[i] === evt.target ?
        evt.target.classList.add('img-filters__button--active') :
        buttonsFilter[i].classList.remove('img-filters__button--active');
    }
  };

  filtersForm.addEventListener('click', changeTarget);
};

export {changeFilter};
