const dataWay = 'https://24.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, onError) => () => fetch(dataWay)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText} Произошла какая-то ошибка / Something happened somewhere`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .then(document.querySelector('.img-filters').classList.remove('img-filters--inactive'))
  .catch((err) => {
    onError(err);
  });

const formToUpload = document.querySelector('.img-upload__form');

const setWay = 'https://24.javascript.pages.academy/kekstagram';

const setSubmit = (closeWindow, messageSuccess, onFail ) => {
  formToUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch (setWay,
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
