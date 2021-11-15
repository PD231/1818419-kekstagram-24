import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
import { errorMessage } from './error-message.js';
import { getBackgroundContent, TIME_TO_PAUSE } from './background-content.js';
import { getData } from './api-fetch.js';
import { miniatures } from './background-content.js';
import { debounce } from './utils/debounce.js';
const backgroundSize = 10;


const setMinMax = (min, max, size) => {
  const previousValues = [];
  for (let i = 0; i < size; i++) {
    let currentValue = getRandomPositiveInteger(min, max);
    if(previousValues.length >= (max-min+1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
  }
  return previousValues;
};


const getRandomMiniatures = (data) => {

  const numbersId = setMinMax(data[0].id, data.length-1, backgroundSize);
  const randomMiniatures =[];
  for (let i = 0; i < numbersId.length; i++) {
    const postData = data.find((item) => item.id === numbersId[i]);
    randomMiniatures.push(postData);
  }

  getBackgroundContent(randomMiniatures);
};
const frameRandomMiniatures = debounce(getData(getRandomMiniatures, errorMessage), TIME_TO_PAUSE);


const getDiscussedSort = (data) => {
  const discussedMiniatures = data.slice();
  discussedMiniatures.sort((a, b) => b.comments.length - a.comments.length );
  getBackgroundContent(discussedMiniatures);
};
const frameDiscussedMiniatures = debounce(getData(getDiscussedSort, errorMessage), TIME_TO_PAUSE);


const showFilters = () => {
  const buttonDefaultFilter = document.querySelector('#filter-default');
  const buttonDiscussedFilter = document.querySelector('#filter-discussed');
  const buttonRandomFilter = document.querySelector('#filter-random');

  buttonDiscussedFilter.addEventListener('click', frameDiscussedMiniatures);
  buttonRandomFilter.addEventListener('click', frameRandomMiniatures);
  buttonDefaultFilter.addEventListener('click', miniatures);
};


export {showFilters};
