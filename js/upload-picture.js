const uploadPicture = () => {
  const FILE_TYPES = ['jpeg', 'png', 'jpg'];


  const fileChooser = document.querySelector('.img-upload__start input[type=file]');
  const preview = document.querySelector('.img-upload__preview').querySelector('img');

  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};
export {uploadPicture};
