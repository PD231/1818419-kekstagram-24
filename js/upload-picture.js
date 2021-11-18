import { showErrorMessage } from './error-message.js';


const uploadPicture = () => {
  const FILE_TYPES = ['jpeg', 'png', 'jpg'];

  const WRONG_FORMAT = 'Скорее всего Вы загрузили фаил не верного формата, попробуйте использовать изображения  jpeg, png или jpg';
  const fileChooser = document.querySelector('.img-upload__start input[type=file]');
  const preview = document.querySelector('.img-upload__preview').querySelector('img');

  fileChooser.addEventListener('change', () => {
    preview.src = '';
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    } else {
      showErrorMessage(WRONG_FORMAT);
    }
  });
};
export {uploadPicture};
