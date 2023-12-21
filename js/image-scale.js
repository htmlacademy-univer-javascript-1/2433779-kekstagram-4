import { MAX_VALUE, MIN_VALUE, DEFAULT_VALUE, STEP } from './const.js';

const shrinkButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview').children[0];

const changeValue = (value) => {
  imageSize.value = `${String(value)}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

shrinkButton.addEventListener('click', () => {
  let numericImageSize = Number(imageSize.value.slice(0, -1));
  if (numericImageSize > MIN_VALUE) {
    numericImageSize -= STEP;
    changeValue(numericImageSize);
  }
});

increaseButton.addEventListener('click', () => {
  let numericImageSize = Number(imageSize.value.slice(0, -1));
  if (numericImageSize < MAX_VALUE) {
    numericImageSize += STEP;
    changeValue(numericImageSize);
  }
});

const resetSize = () => changeValue(DEFAULT_VALUE);

export {resetSize};
