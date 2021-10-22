import { createDescriptionPhoto, DESCRIPTIONS, NUMBER_OF_PHOTOS} from './data.js';

const contentData = createDescriptionPhoto(DESCRIPTIONS, NUMBER_OF_PHOTOS);

const getBackgroundContent = (data) => {

  const contentContainerList = document.querySelector('.pictures'); //куда вставляется шаблон
  const contentTemplate = document.querySelector('#picture').content.querySelector('.picture'); //сам шаблон
  const containerDataFragment = document.createDocumentFragment(); // фрагмент


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

export {getBackgroundContent, contentData};
