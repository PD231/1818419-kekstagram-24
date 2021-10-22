const closeWindow = (closeButtonModal, modalWindow, clearField) => {
  modalWindow.addEventListener('click', () => {
    closeButtonModal.classList.add('hidden');
    document.querySelector('body').classList.remove('.modal-open');
    clearField.innerHTML = '';
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeButtonModal.classList.add('hidden');
      document.querySelector('body').classList.remove('.modal-open');
      clearField.innerHTML = '';
    }
  });
};

export {closeWindow};
