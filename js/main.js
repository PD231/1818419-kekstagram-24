import {showFullPhoto, miniaturesContainer } from './show-full-photo.js';
import {closeWindow} from './utils/close-window.js';
import {changeSize} from './utils/change-size.js';
import {openWindow} from './utils/open-window.js';
import {validityHashTag, validityDescription} from './validity.js';
import { reset } from './utils/reset.js';

showFullPhoto(miniaturesContainer);


const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const controlSmaller = uploadForm.querySelector('.scale__control--smaller');
const controlBigger = uploadForm.querySelector('.scale__control--bigger');
const controlValue = uploadForm.querySelector('.scale__control--value');
const preview = uploadForm.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');

const uploadPhoto = () => {
  openWindow(uploadButton, uploadOverlay);
  changeSize(preview, 25, 25, 100, controlValue, controlSmaller, controlBigger);

  const choosedEffect = (evt) => {
    preview.querySelector('img').classList.value = '';
    preview.querySelector('img').classList.add(`effects__preview--${evt.target.closest('.effects__item').querySelector('.effects__radio').value}`);
  };

  effectsList.addEventListener('click', choosedEffect);
  validityHashTag();
  validityDescription();
  reset();
  closeWindow(uploadOverlay, closeButton,'', uploadForm);
};


uploadPhoto();
