

const changeSize = (item, changingPercent, minSize, maxSize, changingValue, smaller, bigger) => {

  let previewSize = 1;

  let number = parseInt(changingValue.value, 10);

  smaller.addEventListener('click', () => {

    number -= changingPercent;
    previewSize -= (changingPercent/100);
    changingValue.value = `${number}%`;
    if(number <= minSize) {
      number = minSize;
      previewSize = 0.25;
      changingValue.value = `${number}%`;
    }
    item.style.transform = `scale(${previewSize})`;

  });

  bigger.addEventListener('click', () => {
    number += changingPercent;
    previewSize += (changingPercent/100);
    changingValue.value = `${number}%`;
    if(number > maxSize) {
      number = maxSize;
      previewSize = 1;
      changingValue.value = `${number}%`;
    }
    item.style.transform = `scale(${previewSize})`;
  });

};
export {changeSize};
