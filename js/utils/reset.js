
const closeButtom = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const preview = uploadForm.querySelector('.img-upload__preview');

const reset = () => {
  closeButtom.addEventListener('click', () => {
    preview.style = '';
    preview.querySelector('img').classList.value = '';
    uploadForm.reset();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      preview.style = '';
      preview.querySelector('img').classList.value = '';
      uploadForm.reset();
    }
  });
};

export{reset};
