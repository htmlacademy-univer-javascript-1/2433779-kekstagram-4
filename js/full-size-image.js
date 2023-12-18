import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.big-picture');
const userModalCloseButton = userModalElement.querySelector('.big-picture__cancel');
const userModalCommentLoader = userModalElement.querySelector('.comments-loader');
const body = document.querySelector('body');
const comments = userModalElement.querySelector('.social__comments');
const comment = userModalElement.querySelector('.social__comment');
const currentCommentsCount = userModalElement.querySelector('.current-comments-count');

const appendCommentsToContainer = (photo, start, end) => {
  for (let i = start; i < end; i++) {
    const nextComment = comment.cloneNode(true);
    nextComment.querySelector('img').src = photo.comments[i].avatar;
    nextComment.querySelector('img').alt = photo.comments[i].name;
    nextComment.querySelector('p').textContent = photo.comments[i].message;
    comments.append(nextComment);
  }
};

const updateCommentsDisplay = (photo, start, end) => {
  if (photo.comments.length <= end) {
    currentCommentsCount.textContent = photo.comments.length;
    userModalCommentLoader.classList.add('hidden');
    appendCommentsToContainer(photo, start, photo.comments.length);
  }
  else {
    currentCommentsCount.textContent = end;
    appendCommentsToContainer(photo, start, end);
  }
};

let currentClickHandler = null;

const renderComments = (photo) => {
  let start = 0;
  let end = 5;
  while (comments.firstChild) {
    comments.firstChild.remove();
  }

  updateCommentsDisplay(photo, start, end);

  if (currentClickHandler) {
    userModalCommentLoader.removeEventListener('click', currentClickHandler);
  }

  currentClickHandler = () => {
    start = end;
    end += 5;
    updateCommentsDisplay(photo, start, end);
  };

  userModalCommentLoader.addEventListener('click', currentClickHandler);
};

const openUserPicture = (photo) => {
  userModalElement.classList.remove('hidden');
  userModalCommentLoader.classList.remove('hidden');
  userModalElement.querySelector('img').src = photo.url;
  userModalElement.querySelector('.social__caption').textContent = photo.description;
  userModalElement.querySelector('.likes-count').textContent = photo.likes;
  userModalElement.querySelector('.comments-count').textContent = photo.comments.length;

  renderComments(photo);

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
    thumbnails[i].addEventListener('click', (evt) => {
      evt.preventDefault();
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
