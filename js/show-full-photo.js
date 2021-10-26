import {getBackgroundContent, contentData} from './background-content.js';
import { showComment } from './show-coment.js';
import { closeWindow } from './utils/close-window.js';
const miniaturesContainer = getBackgroundContent(contentData);


const showFullPhoto = () => {
  const fullPhoto = document.querySelector('.big-picture');
  const fullPhotoSocial = document.querySelector('.big-picture__social');
  const closeButton = fullPhoto.querySelector('.big-picture__cancel');
  const bigPictures = document.querySelector('.pictures');
  const socialComments = fullPhoto.querySelector('.social__comments');


  const fillPost = (evt) => {
    if (evt.target.closest('.picture')) {
      socialComments.innerHTML = '';
      fullPhoto.classList.remove('hidden');
      fullPhoto.querySelector('.comments-loader').classList.add('hidden');
      fullPhoto.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('body').classList.add('.modal-open');
      fullPhoto.querySelector('img').src = evt.target.closest('.picture').querySelector('.picture__img').src;
      fullPhotoSocial.querySelector('.likes-count').textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
      const idMiniatures = evt.target.closest('.picture').querySelector('.picture__img').id;
      const postData = contentData.find((item) => item.id === +idMiniatures);
      fullPhotoSocial.querySelector('.social__caption').textContent = postData.description;
      fullPhoto.querySelector('.comments-count').textContent = `${(postData.comments).length} из 125 коментариев`;
      (postData.comments).forEach(showComment);
    }};

  bigPictures.addEventListener('click', fillPost);
  closeWindow(fullPhoto, closeButton, '');

};


export {showFullPhoto, miniaturesContainer};
