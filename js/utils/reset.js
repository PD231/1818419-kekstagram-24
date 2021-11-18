import { destroySlider, preview } from '../get-slider.js';
const uploadForm = document.querySelector('.img-upload__form');
const controlValue = uploadForm.querySelector('.scale__control--value');
const hashTagForm = document.querySelector('.text__hashtags');

const reset = () => {
  preview.style = '';
  controlValue.value = 0;
  preview.querySelector('img').classList.value = '';
  uploadForm.reset();
  destroySlider();
  preview.querySelector('img').style = '';
  hashTagForm.style.outline = '';
  hashTagForm.value = '';
};
export{reset};
