const uploadForm = document.querySelector('.img-upload__form');
const preview = uploadForm.querySelector('.img-upload__preview');
const controlSmaller = uploadForm.querySelector('.scale__control--smaller');
const controlBigger = uploadForm.querySelector('.scale__control--bigger');
const controlValue = uploadForm.querySelector('.scale__control--value');


const CHANGING_PERCENT = 25;
const minSize = 25;
const maxSize = 100;

const changeSize = ( ) => {
  controlSmaller.addEventListener('click', () => {
    let numberFromControl = parseInt(controlValue.value, 10);
    numberFromControl -= CHANGING_PERCENT;
    controlValue.value = `${numberFromControl}%`;
    if(numberFromControl <= minSize) {
      numberFromControl = minSize;
      controlValue.value = `${numberFromControl}%`;
    }
    preview.style.transform = `scale(${numberFromControl/100})`;
  });

  controlBigger.addEventListener('click', () => {
    let numberFromControl = parseInt(controlValue.value, 10);

    numberFromControl += CHANGING_PERCENT;
    controlValue.value = `${numberFromControl}%`;

    if(numberFromControl > maxSize) {
      numberFromControl = maxSize;
      controlValue.value = `${numberFromControl}%`;
    }
    preview.style.transform = `scale(${numberFromControl/100})`;
  });
};
export {changeSize};
