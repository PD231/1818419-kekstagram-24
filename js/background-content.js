
import { getData } from './api-fetch.js';
import { errorMessage } from './error-message.js';
import { debounce } from './utils/debounce.js';
const timeToPause = 500;


const getBackgroundContent = (data) => {

  const contentContainerList = document.querySelector('.pictures');
  const contentTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const containerDataFragment = document.createDocumentFragment();


  for(let i = 0; i < data.length; i++) {
    const contentElement = contentTemplate.cloneNode(true);
    contentElement.querySelector('.picture__img').src = data[i].url;
    contentElement.querySelector('.picture__likes').textContent = data[i].likes;
    contentElement.querySelector('.picture__img').alt = data[i].description;
    contentElement.querySelector('.picture__img').id = data[i].id;
    const coments = data[i].comments;
    contentElement.querySelector('.picture__comments').textContent = coments.length;

    containerDataFragment.appendChild(contentElement);
  }

  contentContainerList.appendChild(containerDataFragment);

  return contentContainerList;
};

const miniatures = debounce(getData(getBackgroundContent, errorMessage), timeToPause);


export {getBackgroundContent, miniatures, timeToPause};


