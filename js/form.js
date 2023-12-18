import {isEscapeKey} from './util.js';
import {checkStringLength} from './functions.js';
import {ErrorText, MAX_HASHTAG_COUNT, MAX_COMMENT_LENGTH} from './const.js';
import {resetSize} from './scale.js';
import {resetEffects} from './slider.js';

const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUpload = imageUploadForm.querySelector('.img-upload__input');
const hashtags = imageUploadForm.querySelector('.text__hashtags');
const description = imageUploadForm.querySelector('.text__description');
const closeButton = imageUploadForm.querySelector('.img-upload__cancel');
const uploadButton = imageUploadForm.querySelector('.img-upload__submit');
const regularExpression = /^#[a-zа-яё0-9]{1,19}$/i;

const normalizeTags = (tags) => tags
  .split(' ')
  .filter((tag) => Boolean(tag.length));

function isValidTag(value) {
  let flag = true;
  normalizeTags(value).forEach((tag) => {
    if (!regularExpression.test(tag)) {
      flag = false;
    }
  });
  return flag;
}

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

const stopPropagationHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const validateForm = () => {
  const isValid = pristine.validate();
  uploadButton.disabled = !isValid;
};

const openImageUpload = () => {
  imageUpload.addEventListener('change', () => {
    resetSize();
    resetEffects();
    imageUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    description.addEventListener('keydown', stopPropagationHandler);
    hashtags.addEventListener('keydown', stopPropagationHandler);
    document.addEventListener('keydown', onDocumentKeydown);
    imageUploadForm.addEventListener('input', validateForm);
  });
};

const closeImageUpload = () => {
  imageUploadForm.reset();
  pristine.reset();
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', () => {
  closeImageUpload();
});

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageUpload();
  }
}

export {openImageUpload};

