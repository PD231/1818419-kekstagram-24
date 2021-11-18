import { reset } from '../utils/reset.js';


const closeWindow = (closeButtonModal, modalWindow) => {
  const addEscEventOnUploadPhoto  = (evt) => {
    if ((evt.key === 'Escape') && (!evt.target.closest('.text__description, .text__hashtags'))) {
      evt.preventDefault();
      closeButtonModal.classList.add('hidden');
      document.querySelector('body').classList.remove('.modal-open');
      document.removeEventListener('keydown', addEscEventOnUploadPhoto );
      reset();
    }
  };

  modalWindow.addEventListener('click', () => {
    closeButtonModal.classList.add('hidden');
    document.querySelector('body').classList.remove('.modal-open');
    document.removeEventListener('keydown', addEscEventOnUploadPhoto );
    reset();
  });

  document.addEventListener('keydown', addEscEventOnUploadPhoto );
};


export {closeWindow};
