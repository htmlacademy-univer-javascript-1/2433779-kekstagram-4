const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoListElement = document.querySelector('.pictures');

const renderThumbnails = (photoArray) => {
  photoArray.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoListElement.append(photoElement);
  });
};

export {renderThumbnails};
