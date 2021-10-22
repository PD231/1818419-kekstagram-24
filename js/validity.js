

const hashTagForm = document.querySelector('.text__hashtags');
const buttonsubmit = document.querySelector('.img-upload__submit');
const descriptionText = document.querySelector('.text__description');

const validity = () => {
  descriptionText.oninput = () => {
    const descriptionSize = descriptionText.value.length;

    if (descriptionSize.length > 140) {
      buttonsubmit.disabled = true;
    } else {buttonsubmit.disabled = false;
    }
  };

  hashTagForm.oninput = () => {
    const hashTags = hashTagForm.value.split(' ');
    const uniqHashTags = [... new Set(hashTags)];
    let uniq = false;


    if (hashTags.length > 5) {
      buttonsubmit.disabled = true;
    } else {buttonsubmit.disabled = false;
    }

    if (hashTags.length === uniqHashTags.length) {
      uniq = true;
    }

    hashTagForm.addEventListener('input', () => {
      if(buttonsubmit.disabled) {
        hashTagForm.setCustomValidity('Вы можете указать не более 5-ти хэш-тегов');
      } else if (!uniq) {
        hashTagForm.setCustomValidity('Хэш-теги не должны быть одинаковыми');
      }  else {
        hashTagForm.setCustomValidity('');
      }
    });

    hashTagForm.reportValidity();
  };
};
export {validity};
