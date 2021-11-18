import '../nouislider/nouislider.js';
import {changeSize} from './utils/change-size.js';
import {openWindow} from './utils/open-window.js';
import {validateHashTag, validateDescription} from './validity.js';
import { reset } from './utils/reset.js';
import {closeWindow} from './utils/close-window.js';
import { chooseEffect } from './choose-effect.js';
const uploadButton = document.querySelector('#upload-file');
const effectsList = document.querySelector('.effects__list');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');

const uploadPhoto = () => {
  uploadButton.addEventListener('change', (evt) => {
    evt.preventDefault();
    openWindow(uploadOverlay);
    closeWindow(uploadOverlay, closeButton);
  });

  changeSize();
  effectsList.addEventListener('click', chooseEffect);
  validateHashTag();
  validateDescription();
  reset();
};


export {uploadPhoto, uploadOverlay};
