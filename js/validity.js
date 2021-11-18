
const hashTagForm = document.querySelector('.text__hashtags');
const buttonsubmit = document.querySelector('.img-upload__submit');
const descriptionText = document.querySelector('.text__description');

const validateHashTag = () => {
  const regularSentence = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  hashTagForm.addEventListener('input', () => {
    let hashTags = '';
    hashTags = hashTagForm.value.split(' ');
    for ( const element of hashTags) {
      if (!element.startsWith('#')) {
        hashTagForm.style.outline = '1px solid tomato';
        hashTagForm.setCustomValidity('Хэш-тег должен начинаться со знака #');
      } else if (element.search(regularSentence)){
        hashTagForm.style.outline = '1px solid tomato';
        hashTagForm.setCustomValidity('Хэш-тег должен содержать более 2-х символов и состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
      } else {
        hashTagForm.setCustomValidity('');
        hashTagForm.style.outline = '';
      }
    }

    if(hashTagForm.value === '') {
      hashTagForm.style.removeProperty('outline');
      hashTagForm.setCustomValidity('');
    }

    const copiesHashTags = hashTags.slice();
    const UPPERCASE_HASH_TAGS = [];
    for (const item of copiesHashTags) {
      const upperHashTag = item.toUpperCase();
      UPPERCASE_HASH_TAGS.push(upperHashTag);
    }

    const uniqHashTags = [... new Set(UPPERCASE_HASH_TAGS)];

    if (hashTags.length !== uniqHashTags.length) {
      hashTagForm.setCustomValidity('Хэш-теги не должны повторяться');
      hashTagForm.style.outline = '1px solid tomato';
    }

    if (hashTags.length > 5) {
      buttonsubmit.disabled = true;
      hashTagForm.setCustomValidity('Вы можете указать не более 5-ти хэш-тегов');
    }

    hashTagForm.reportValidity();
  });
};

const validateDescription = () => {

  descriptionText.addEventListener('input', () => {
    const descriptionSize = descriptionText.value.length;

    if (descriptionSize >= 139) {
      buttonsubmit.disabled = true;
      descriptionText.style.outline = '1px solid tomato';
      descriptionText.setCustomValidity(`Максимальное колличество символов не может быть больше 140, сейчас вы ввели ${  descriptionSize  } символов`);
    }
    if (descriptionSize <= 140) {
      descriptionText.style.removeProperty('outline');
      descriptionText.setCustomValidity('');
    }
    descriptionText.reportValidity();
  });

};

buttonsubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

export {validateHashTag, validateDescription};

