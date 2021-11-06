
const getData = (onSuccess, onError) => () => fetch('https://24.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText} Произошла какая-то ошибка / Something happened somewhere`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

const uploadForm = document.querySelector('.img-upload__form');


const setSubmit = (closeWindow, messageSuccess, onFail ) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch ('https://24.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          closeWindow();
          messageSuccess();
        } else {
          closeWindow();
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
  });
};

export {getData, setSubmit};
