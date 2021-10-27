
const openWindow = ( activeWindow ) => {
  activeWindow.classList.remove('hidden');
  document.querySelector('body').classList.remove('.modal-open');
};

export {openWindow};
