const changeFilter = (evt) => {
  const buttonsFilter = document.querySelectorAll('.img-filters__button');
  for (let i = 0; i< buttonsFilter.length; i++) {
    if(buttonsFilter[i] === evt.target) {
      evt.target.classList.add('img-filters__button--active');
    } else {
      buttonsFilter[i].classList.remove('img-filters__button--active');
    }
  }
};

const doChangeFilter = document.querySelector('.img-filters__form').addEventListener('click', changeFilter);

export {doChangeFilter};
