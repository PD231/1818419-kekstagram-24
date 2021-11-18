import { getSlider } from './get-slider.js';
import { destroySlider, preview } from './get-slider.js';

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


const chooseEffect = (evt) => {
  preview.querySelector('img').classList.value = '';
  preview.querySelector('img').classList.add(`effects__preview--${evt.target.closest('.effects__item').querySelector('.effects__radio').value}`);
  const efectTargetValue = (evt.target.closest('.effects__item').querySelector('.effects__radio').value);
  destroySlider();

  const findingEffect = kindOfEffects.find((item) => item.value === efectTargetValue);
  getSlider(findingEffect);

  if (preview.querySelector('img').classList.value === 'effects__preview--none') {
    destroySlider();
    preview.querySelector('img').style = '';
  }
};

export {chooseEffect};
