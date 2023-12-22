const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoListElement = document.querySelector('.pictures');
const filterBlock = document.querySelector('.img-filters');

const sortRandomly = (photoArray) => {
  for (let i = photoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photoArray[i], photoArray[j]] = [photoArray[j], photoArray[i]];
  }
  const randomPhotos = photoArray.slice(0, 10);
  return randomPhotos;
};

const sortPopularity = (photoArray) => photoArray.sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);

const renderThumbnails = (photoArray, sortingType) => {
  let totalphotoArray = photoArray.slice();
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });

  switch (sortingType) {
    case 'random':
      totalphotoArray = sortRandomly(totalphotoArray);
      break;
    case 'discussed':
      totalphotoArray = sortPopularity(totalphotoArray);
      break;
  }

  totalphotoArray.forEach((photo) => {
    filterBlock.classList.remove('img-filters--inactive');
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoListElement.append(photoElement);
  });
};

export {renderThumbnails};
