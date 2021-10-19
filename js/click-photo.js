import {backgroundContent, contentData} from './background-content.js';


const miniaturesContainer = backgroundContent(contentData);

const clickPhoto = (miniatures) => {
  miniatures = miniaturesContainer.querySelectorAll('.picture');
  const fullPhoto = document.querySelector('.big-picture');
  const fullPhotoSocial = document.querySelector('.big-picture__social');
  const closeButton = fullPhoto.querySelector('.big-picture__cancel');
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');


  for (let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      fullPhoto.querySelector('.social__comments').innerHTML = '';
      fullPhoto.classList.remove('hidden');
      fullPhoto.querySelector('.comments-loader').classList.add('hidden');
      fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('body').classList.add('.modal-open');
      fullPhoto.querySelector('img').src = miniatures[i].querySelector('.picture__img').src;
      fullPhotoSocial.querySelector('.likes-count').textContent = miniatures[i].querySelector('.picture__likes').textContent;
      fullPhotoSocial.querySelector('.social__caption').textContent = miniatures[i].querySelector('.picture__img').alt;

      const coments = contentData[i].comments;

      for(let j = 0; j < coments.length; j++) {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = coments[j].avatar;
        commentElement.querySelector('.social__picture').alt = coments[j].name;
        commentElement.querySelector('.social__text').textContent = coments[j].message;
        fullPhoto.querySelector('.social__comments').appendChild(commentElement);
      }
      fullPhoto.querySelector('.comments-count').textContent = `${coments.length} из 125 коментариев`;
    });

    closeButton.addEventListener('click', () => {
      fullPhoto.classList.add('hidden');
      document.querySelector('body').classList.remove('.modal-open');
      fullPhoto.querySelector('.social__comments').innerHTML = '';
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        fullPhoto.classList.add('hidden');
        document.querySelector('body').classList.remove('.modal-open');
        fullPhoto.querySelector('.social__comments').innerHTML = '';
      }
    });

  }
};


export {clickPhoto, miniaturesContainer};
