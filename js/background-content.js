
import { createDescriptionPhoto, DESCRIPTIONS, NUMBER_OF_PHOTOS} from './data.js';


const contentContainerList = document.querySelector('.pictures');
const contentTemplate = document.querySelector('#picture').content.querySelector('.picture');
const contentData = createDescriptionPhoto(DESCRIPTIONS, NUMBER_OF_PHOTOS);
const containerDataFragment = document.createDocumentFragment();

for (const content of contentData) {
  const contentElement = contentTemplate.cloneNode(true);
  contentElement.querySelector('.picture__img').src = content.url;
  contentElement.querySelector('.picture__comments').textContent = content.comments.length;
  contentElement.querySelector('.picture__likes').textContent = content.likes;
  containerDataFragment.appendChild(contentElement);
}
contentContainerList.appendChild(containerDataFragment);

export {contentContainerList};
