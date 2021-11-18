const sliderValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const uploadForm = document.querySelector('.img-upload__form');
const preview = uploadForm.querySelector('.img-upload__preview');


const getSlider = (effect) => {
  noUiSlider.create(sliderElement, {
    range: effect.range,
    start: effect.start,
    step: effect.step,
  });

  sliderElement.noUiSlider.on('update', (_, handle, unencode) => {
    sliderValue.value = unencode[handle];
    preview.querySelector('img').style.filter = `${effect.filter}(${sliderValue.value})`;
    if (effect.filter === 'blur') {
      preview.querySelector('img').style.filter = `${effect.filter}(${sliderValue.value}px)`;
    }
    if (effect.filter === 'invert') {
      preview.querySelector('img').style.filter = `${effect.filter}(${sliderValue.value}%)`;
    }
  });
};

const destroySlider = () => {
  if ((sliderElement.classList.value).includes('noUi-target')){
    sliderElement.noUiSlider.destroy();
  }
};

export {getSlider, destroySlider, preview};
