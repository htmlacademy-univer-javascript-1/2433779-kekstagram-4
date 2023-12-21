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

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const ErrorText = {
  COMMENT_LENGTH: 'Максимум 140 символов',
  TAG_UNIQUENESS: 'Хэш-теги повторяются',
  TAG_QUANTITY: 'Превышено количество хэш-тегов',
  TAG_INVALIDITY: 'Введён невалидный хэш-тег',
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз'
};

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const DEFAULT_VALUE = 100;
const ALERT_SHOW_TIME = 5000;
const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';

export {MESSAGE, NAMES, DESCRIPTION, MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, ErrorText, Method, Route, STEP, MAX_VALUE, MIN_VALUE, DEFAULT_VALUE, EFFECTS, ALERT_SHOW_TIME, BASE_URL};
