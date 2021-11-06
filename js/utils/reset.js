import { preview, destroySlider} from '../upload-photo.js';
const uploadForm = document.querySelector('.img-upload__form');
const controlValue = uploadForm.querySelector('.scale__control--value');

const reset = () => {
  preview.style = '';
  controlValue.value = 0;
  preview.querySelector('img').classList.value = '';
  uploadForm.reset();
  destroySlider();
  preview.querySelector('img').style = '';
};


export{reset};
