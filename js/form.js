import {isEscapeKey} from './util.js';
import {resetSize} from './scale.js';
import {resetEffects} from './slider.js';
import {postData} from './api.js';
import {pristine} from './validation.js';

const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const imageUpload = imageUploadForm.querySelector('.img-upload__input');
const hashtags = imageUploadForm.querySelector('.text__hashtags');
const description = imageUploadForm.querySelector('.text__description');
const closeButton = imageUploadForm.querySelector('.img-upload__cancel');
const uploadButton = imageUploadForm.querySelector('.img-upload__submit');

const successUpload = document.querySelector('#success').content.cloneNode(true);
body.append(successUpload);
const successMessage = document.querySelector('.success');
const successButton = document.querySelector('.success__button');
successMessage.classList.add('hidden');

const errorUpload = document.querySelector('#error').content.cloneNode(true);
body.append(errorUpload);
const errorMessage = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');
errorMessage.classList.add('hidden');

const stopPropagationHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const validateForm = () => {
  const isValid = pristine.validate();
  uploadButton.disabled = !isValid;
};

const resetForm = () => {
  imageUploadForm.reset();
  pristine.reset();
};

const closeImageUpload = () => {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadButton.disabled = false;
  description.addEventListener('keydown', stopPropagationHandler);
  hashtags.addEventListener('keydown', stopPropagationHandler);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showMessage = (messageContainer, button, innerSelector) => {
  messageContainer.classList.remove('hidden');

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    messageContainer.classList.add('hidden');
  }, { once: true });

  body.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target !== body.querySelector(innerSelector)) {
      messageContainer.classList.add('hidden');
    }
  }, { once: true });

  body.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageContainer.classList.add('hidden');
    }
  }, { once: true });
};

const showSuccessMessage = () => {
  showMessage(successMessage, successButton, '.success__inner');
};

const showErrorMessage = () => {
  showMessage(errorMessage, errorButton, '.error__inner');
};


const onSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    uploadButton.disabled = true;
    postData(new FormData(evt.target))
      .then(resetForm)
      .then(showSuccessMessage)
      .catch(showErrorMessage)
      .finally(closeImageUpload);
  }
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
    imageUploadForm.removeEventListener('input', validateForm);
    imageUploadForm.removeEventListener('submit', onSubmit);
    imageUploadForm.addEventListener('input', validateForm);
    imageUploadForm.addEventListener('submit', onSubmit);
  });
};

closeButton.addEventListener('click', () => {
  closeImageUpload();
  resetForm();
  imageUploadForm.removeEventListener('input', validateForm);
  imageUploadForm.removeEventListener('submit', onSubmit);
});

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImageUpload();
    resetForm();
    imageUploadForm.removeEventListener('input', validateForm);
    imageUploadForm.removeEventListener('submit', onSubmit);
  }
}

export {openImageUpload};

