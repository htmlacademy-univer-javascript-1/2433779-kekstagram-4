const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Екатерина',
  'Иван',
  'Анна',
  'Михаил',
  'Ольга',
  'Сергей',
  'Наталья',
  'Дмитрий',
  'Мария',
];

const DESCRIPTION = [
  'Природная красота во всей своей палитре.',
  'Момент вечной гармонии.',
  'Искусство в природе.',
  'Захватывающая игра света и тени.',
  'Симфония природы.',
  'Величие момента.',
  'Природное великолепие.',
  'Эмоциональное отражение.',
  'Сказочная атмосфера.',
  'Легендарная красота.',
  'Вдохновение искусством природы.',
  'Эффектное преображение.',
  'Стремление к идеалу.',
  'Загадочная глубина.',
  'Мир, окутанный тайной.',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = (min === -Number.MAX_VALUE) ? (getRandomInteger(0, max) + getRandomInteger(min, 0)) : getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
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



