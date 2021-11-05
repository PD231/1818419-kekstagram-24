import { reset } from './utils/reset.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');

const closeApiMessage = (button, message, uncloseedSquare) => {
  button.addEventListener('click', () => {
    document.querySelector('body').removeChild(message);
  });

  message.addEventListener('click', (evt) => {
    if(!evt.target.closest(uncloseedSquare)) {
      document.querySelector('body').removeChild(message);
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.querySelector('body').removeChild(message);
    }
  });
};

const closeWindowAfterSubmit = () => {
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('.modal-open');
  reset();
};

const showMessageOfSuccess = () => {
  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const containerSuccessMessageFragment = document.createDocumentFragment();

  const messageOfSuccess = messageTemplate.cloneNode(true);

  containerSuccessMessageFragment.appendChild(messageOfSuccess);
  document.querySelector('body').appendChild(containerSuccessMessageFragment);
  const buttonCloseSuccessMessage = messageOfSuccess.querySelector('.success__button');
  closeApiMessage(buttonCloseSuccessMessage, messageOfSuccess, '.success__inner');
};

const someFail = () => {
  const messageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
  const containerFailMessageFragment = document.createDocumentFragment();
  const messageOfError = messageErrorTemplate.cloneNode(true);
  containerFailMessageFragment.appendChild(messageOfError);
  document.querySelector('body').appendChild(containerFailMessageFragment);
  const buttonCloseErrorMessage = messageOfError.querySelector('.error__button');
  closeApiMessage(buttonCloseErrorMessage, messageOfError, '.error__inner');
};

export {showMessageOfSuccess, someFail, closeWindowAfterSubmit};
