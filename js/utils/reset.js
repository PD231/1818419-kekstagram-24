
import { preview, destroySlider} from '../upload-photo.js';
const closeButtom = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const controlValue = uploadForm.querySelector('.scale__control--value');

const reset = () => {
  closeButtom.addEventListener('click', () => {
    preview.style = '';
    controlValue.value = 0;
    preview.querySelector('img').classList.value = '';
    uploadForm.reset();
    destroySlider();
    preview.querySelector('img').style = '';
  });

  document.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Escape') && (!evt.target.closest('.text__description, .text__hashtags'))) {
      preview.style = '';
      controlValue.value = 0;
      preview.querySelector('img').classList.value = '';
      uploadForm.reset();
      destroySlider();
      preview.querySelector('img').style = '';
    }
  });
};

export{reset};
