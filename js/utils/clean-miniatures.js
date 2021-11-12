

const cleanMiniatures = (evt) => {
  const buttonsFilter = document.querySelectorAll('.img-filters__button');
  for (let i = 0; i< buttonsFilter.length; i++) {
    if(buttonsFilter[i] === evt.target) {
      evt.target.classList.add('img-filters__button--active');
    } else {
      buttonsFilter[i].classList.remove('img-filters__button--active');
    }
  }

  const bigPictures = document.querySelector('.pictures');
  const miniaturesCollection =  bigPictures.querySelectorAll('.picture');
  for (let i=0; i < miniaturesCollection.length; i++) {
    bigPictures.removeChild(miniaturesCollection[i]);
  }
};

export {cleanMiniatures};
