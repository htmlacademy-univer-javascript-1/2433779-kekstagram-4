import {checkStringLength} from './functions.js';
import {ErrorText, MAX_HASHTAG_COUNT, MAX_COMMENT_LENGTH} from './const.js';

const regularExpression = /^#[a-zа-яё0-9]{1,19}$/i;
const imageUploadForm = document.querySelector('.img-upload__form');
const hashtags = imageUploadForm.querySelector('.text__hashtags');
const description = imageUploadForm.querySelector('.text__description');

const normalizeTags = (tags) => tags
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const isValidTag = (value) => {
  let flag = true;
  normalizeTags(value).forEach((tag) => {
    if (!regularExpression.test(tag)) {
      flag = false;
    }
  });
  return flag;
};

const isTagUnique = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

pristine.addValidator(
  description,
  (value) => checkStringLength(value, MAX_COMMENT_LENGTH),
  ErrorText.COMMENT_LENGTH
);

pristine.addValidator(
  hashtags,
  (value) => checkStringLength(normalizeTags(value), MAX_HASHTAG_COUNT),
  ErrorText.TAG_QUANTITY,
  3,
  true
);

pristine.addValidator(
  hashtags,
  isValidTag,
  ErrorText.TAG_INVALIDITY,
  2,
  true
);

pristine.addValidator(
  hashtags,
  isTagUnique,
  ErrorText.TAG_UNIQUENESS,
  1,
  true
);

export {pristine};
