
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveInteger = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const checkLengthString = (stringLength, maxSymbols) => (stringLength <= maxSymbols);

checkLengthString(109, 100);
//___________________________________________________________


const createDescriptionPhoto = () => {

  const DESCRIPTIONS = [
    'Природа',
    'На шашлыках',
    'Я на море',
    'Я на даче',
    'Я пью',
    'Я ем',
    'Скоро в отпуск',
    'Будте нате',
    'Мамкин бродяга, папкин симпотяга',
    'Достаточно',
  ];

  const LIST_PROFILES = [];
  const COUNT = 25;
  for(let step = 0; step < COUNT; step++) {
    const ID = step + 1;
    const URL = `photos/${ID}.jpg`;
    const SOME_PROFILE = {
      id: ID,
      url: URL,
      DESCRIPTION: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length -1)],
      likes: getRandomPositiveInteger(15, 200),
    };

    const CREATE_COMMENT = () => {

      const MESSAGES = [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
      ];
      /* список персонажей вселенной видеоигры Red Dead Redemption 2 от компании Rockstar Games.
 https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B5%D0%B9_Red_Dead_Redemption_2*/

      const NAMES = [
        'Датч Ван дер Линде',
        'Артур Морган',
        'Джон Марстон',
        'Эбигейл Робертс',
        'Джек Марстон',
        'Хозия Мэттьюз',
        'Билл Уильямсон',
        'Хавьер Эскуэла',
        'Чарльз Смит',
        'Ленни Саммерс',
        'Шон Макгуайр',
        'Мика Белл',
        'Сэди Адлер',
        'Дядюшка',
        'Мистер Пирсон',
        'Сьюзан Гримшо',
        'Молли О’Ши',
        'Карен Джонс',
        'Мэри-Бет Гаскилл',
        'Тилли Джексон',
        'Леопольд Штраус',
        'Джосайя Трелони',
        'Пастор Суонсон',
        'Киран Даффи',
        'Эндрю Милтон',
      ];


      const AVATAR = `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`;

      return {
        id: SOME_PROFILE.id * 2,
        avatar: AVATAR,
        message: [MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)]],
        name: NAMES[getRandomPositiveInteger(0, NAMES.length -1)],
      };
    };

    SOME_PROFILE.comments = CREATE_COMMENT();


    LIST_PROFILES[step] = SOME_PROFILE;
  }

  return LIST_PROFILES;
};

createDescriptionPhoto();
