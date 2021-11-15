

const cleanMiniatures = () => {
  const bigPictures = document.querySelector('.pictures');
  const miniaturesCollection =  bigPictures.querySelectorAll('.picture');
  for (let i=0; i < miniaturesCollection.length; i++) {
    bigPictures.removeChild(miniaturesCollection[i]);
  }
};

export {cleanMiniatures};

