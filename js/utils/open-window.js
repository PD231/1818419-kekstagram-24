
const openWindow = (openButton, activeWindow) => {
  openButton.addEventListener('change', (evt) => {
    evt.preventDefault();
    activeWindow.classList.remove('hidden');
    document.querySelector('body').classList.remove('.modal-open');
  });
};

export {openWindow};
