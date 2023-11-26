import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
import {MESSAGE, NAMES, DESCRIPTION} from './const.js';

const generateId = createRandomIdFromRangeGenerator(1, 25);
const generateUrl = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(-Number.MAX_VALUE, Number.MAX_VALUE);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGE)).join(' '),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const createPhotoDescriptionArray = () => Array.from({length: 25}, createPhotoDescription);

export {createPhotoDescriptionArray};
