// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
import {cleanMiniatures} from './clean-miniatures.js';
function debounce (callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cleanMiniatures();
      callback.apply(this, rest);
    }, timeoutDelay);

  };
}

export {debounce};
