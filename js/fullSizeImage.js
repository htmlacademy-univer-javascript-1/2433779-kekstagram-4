import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseButton = userModalElement.querySelector('.big-picture__cancel');
const userModalCommentCount = userModalElement.querySelector('.social__comment-count');
const userModalCommentLoader = userModalElement.querySelector('.comments-loader');
const body = document.querySelector('body');
const comments = userModalElement.querySelector('.social__comments');
const comment = userModalElement.querySelector('.social__comment');

const renderComments = (photo) => {
  while (comments.firstChild) {
    comments.firstChild.remove();
  }

  for (let i = 0; i < photo.comments.length; i++) {
    const nextComment = comment.cloneNode(true);
    nextComment.querySelector('img').src = photo.comments[i].avatar;
    nextComment.querySelector('img').alt = photo.comments[i].name;
    nextComment.querySelector('p').textContent = photo.comments[i].message;
    comments.append(nextComment);
  }
};

const openUserPicture = (photo) => {
  userModalElement.classList.remove('hidden');
  userModalElement.querySelector('img').src = photo.url;
  userModalElement.querySelector('.social__caption').textContent = photo.description;
  userModalElement.querySelector('.likes-count').textContent = photo.likes;
  userModalElement.querySelector('.comments-count').textContent = photo.comments.length;

  renderComments(photo);

  userModalCommentCount.classList.add('hidden');
  userModalCommentLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUserPicture = () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openUserModalElement = (photoArray) => {
  const thumbnails = document.querySelectorAll('.picture__img');
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
      openUserPicture(photoArray[i]);
    });
  }
};

userModalCloseButton.addEventListener('click', () => {
  closeUserPicture();
});

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserPicture();
  }
}

export {openUserModalElement};
