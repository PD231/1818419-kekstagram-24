import { showComment } from './show-coment.js';
import { openWindow } from './utils/open-window.js';
import { closeWindow} from './utils/close-window.js';
import { getData } from './api-fetch.js';
import { showErrorMessage } from './error-message.js';


const showFullPhoto = () => {
  const fullPhoto = document.querySelector('.big-picture');
  const fullPhotoSocial = document.querySelector('.big-picture__social');
  const closeButton = fullPhoto.querySelector('.big-picture__cancel');
  const bigPictures = document.querySelector('.pictures');
  const socialComments = fullPhoto.querySelector('.social__comments');
  const lastComment = fullPhoto.querySelector('.comments-count');

  const fillPost = (evt) => {
    if (evt.target.closest('.picture')) {
      socialComments.innerHTML = '';
      openWindow(fullPhoto);
      closeWindow(fullPhoto, closeButton);
      const addComments = fullPhoto.querySelector('.comments-loader');
      fullPhoto.querySelector('img').src = evt.target.closest('.picture').querySelector('.picture__img').src;
      fullPhotoSocial.querySelector('.likes-count').textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
      const idMiniatures = evt.target.closest('.picture').querySelector('.picture__img').id;

      const findComments = (data) => {
        const postData = data.find((item) => item.id === +idMiniatures);
        fullPhotoSocial.querySelector('.social__caption').textContent = postData.description;

        const comments = (postData.comments).slice();
        let startComment = 0;
        const visibleNumberComment = 5;
        let finishComment = visibleNumberComment;
        const commentsUnderPhoto = comments.slice(startComment, finishComment);
        commentsUnderPhoto.forEach(showComment);
        let sumComments = commentsUnderPhoto.length;
        lastComment.textContent = comments.length;
        document.querySelector('.social__comment-count').textContent = `${sumComments } из ${  lastComment.textContent  } комментариев`;

        addComments.addEventListener('click', () => {
          startComment += visibleNumberComment;
          finishComment += visibleNumberComment;
          const adderComments = comments.slice(startComment, finishComment);
          adderComments.forEach(showComment);
          sumComments+=adderComments.length;
          document.querySelector('.social__comment-count').textContent = `${sumComments } из ${  lastComment.textContent  } комментариев`;
        });
      };
      const frameComments = getData(findComments, showErrorMessage);
      frameComments();
    }};


  bigPictures.addEventListener('click', fillPost);
};

export {showFullPhoto};
