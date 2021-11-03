
import {closeWindow} from './utils/close-window.js';
import {changeSize} from './utils/change-size.js';
import {openWindow} from './utils/open-window.js';
import {validityHashTag, validityDescription} from './validity.js';
import { reset } from './utils/reset.js';
import '/nouislider/nouislider.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const preview = uploadForm.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const kindOfEffects = [
  {
    value: 'none' ,
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: '',
  },
  {
    value: 'chrome',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: 'grayscale',
  },
  {
    value: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    filter: 'sepia',
  },
  {
    value: 'marvin',
    range: {
      min: 1,
      max: 100,
    },
    start: 100,
    step: 1,
    filter: 'invert',
  },
  {
    value: 'phobos',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: 'blur',
  },
  {
    value: 'heat',
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    filter: 'brightness',
  },
];

const destroySlider = () => {
  if ((sliderElement.classList.value).includes('noUi-target')){
    sliderElement.noUiSlider.destroy();
  }
};

const uploadPhoto = () => {
  uploadButton.addEventListener('change', (evt) => {
    evt.preventDefault();
    openWindow(uploadOverlay);
  });

  changeSize();

  const choosedEffect = (evt) => {
    preview.querySelector('img').classList.value = '';
    preview.querySelector('img').classList.add(`effects__preview--${evt.target.closest('.effects__item').querySelector('.effects__radio').value}`);
    const efectTargetValue = (evt.target.closest('.effects__item').querySelector('.effects__radio').value);
    const findingEffect = kindOfEffects.find((item) => item.value === efectTargetValue);
    destroySlider();

    noUiSlider.create(sliderElement, {
      range: findingEffect.range,
      start: findingEffect.start,
      step: findingEffect.step,
    });

    sliderElement.noUiSlider.on('update', (_, handle, unencode) => {
      sliderValue.value = unencode[handle];
      preview.querySelector('img').style.filter = `${findingEffect.filter}(${sliderValue.value})`;
      if (findingEffect.filter === 'blur') {
        preview.querySelector('img').style.filter = `${findingEffect.filter}(${sliderValue.value}px)`;
      }
      if (findingEffect.filter === 'invert') {
        preview.querySelector('img').style.filter = `${findingEffect.filter}(${sliderValue.value}%)`;
      }
    });

    if (preview.querySelector('img').classList.value === 'effects__preview--none') {
      destroySlider();
    }
  };

  effectsList.addEventListener('click', choosedEffect);
  validityHashTag();
  validityDescription();
  reset();
  closeWindow(uploadOverlay, closeButton);
};


export {uploadPhoto, preview, destroySlider};
