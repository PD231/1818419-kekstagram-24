
const closeWindow = (closeButtonModal, modalWindow) => {
  modalWindow.addEventListener('click', () => {
    closeButtonModal.classList.add('hidden');
    document.querySelector('body').classList.remove('.modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Escape') && (!evt.target.closest('.text__description, .text__hashtags'))) {
      evt.preventDefault();
      closeButtonModal.classList.add('hidden');
      document.querySelector('body').classList.remove('.modal-open');
    }
  });
};

export {closeWindow};
