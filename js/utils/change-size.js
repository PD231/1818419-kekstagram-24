const uploadForm = document.querySelector('.img-upload__form');
const preview = uploadForm.querySelector('.img-upload__preview');
const controlSmaller = uploadForm.querySelector('.scale__control--smaller');
const controlBigger = uploadForm.querySelector('.scale__control--bigger');
const controlValue = uploadForm.querySelector('.scale__control--value');


const CHANGING_PERCENT = 25;
const MIN_SIZE = 25;
const MAX_SIZE = 100;

const changeSize = ( ) => {
  controlSmaller.addEventListener('click', () => {
    let numberFromControl = parseInt(controlValue.value, 10);
    numberFromControl -= CHANGING_PERCENT;
    controlValue.value = `${numberFromControl}%`;
    if(numberFromControl <= MIN_SIZE) {
      numberFromControl = MIN_SIZE;
      controlValue.value = `${numberFromControl}%`;
    }
    preview.style.transform = `scale(${numberFromControl/100})`;
  });

  controlBigger.addEventListener('click', () => {
    let numberFromControl = parseInt(controlValue.value, 10);

    numberFromControl += CHANGING_PERCENT;
    controlValue.value = `${numberFromControl}%`;

    if(numberFromControl > MAX_SIZE) {
      numberFromControl = MAX_SIZE;
      controlValue.value = `${numberFromControl}%`;
    }
    preview.style.transform = `scale(${numberFromControl/100})`;
  });
};
export {changeSize};
