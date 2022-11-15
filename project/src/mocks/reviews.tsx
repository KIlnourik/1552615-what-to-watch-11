import { Review } from '../types/reviews-types';

export const reviews: Review[] = [
  {
    comment: 'Я в восторге!!!!11!!!',
    date: 'December 22, 2012',
    id: 101,
    rating: 10.0,
    user: {
      id: 101,
      name: 'Пряня',
    },
  },
  {
    comment: 'с пивом пойдет чё...',
    date: 'October 11, 2022',
    id: 19,
    rating: 7.0,
    user: {
      id: 99,
      name: 'Кином@Н',
    },
  },
  {
    comment: 'На болото смотреть интересней...',
    date: 'June 12, 2022',
    id: 11,
    rating: 5.1,
    user: {
      id: 5,
      name: 'Шрек',
    },
  },
  {
    comment: 'Вечно ты, Шрек, негативишь! Очень хороший фильм! Лучше твоего болота',
    date: 'April 4, 2021',
    id: 12,
    rating: 9.0,
    user: {
      id: 10,
      name: 'Осел',
    },
  },
  {
    comment: 'Goooooood',
    date: 'November 4, 2021',
    id: 18,
    rating: 7.0,
    user: {
      id: 2,
      name: 'Фиона',
    },
  },
  {
    comment: 'С точки зрения банальной эрудиции в аспекте призматической парадоксальности, цинизм ваших слов в данной концепции ассоциируется мистификацией парадоксальных иллюзий',
    date: 'December 22, 2021',
    id: 14,
    rating: 10.0,
    user: {
      id: 90,
      name: 'Пиноккио',
    },
  },
  {
    comment: 'Нелпохо, но поросята вкуснее..',
    date: 'May 1, 2021',
    id: 20,
    rating: 8.0,
    user: {
      id: 7,
      name: 'Серый волк',
    },
  },
  {
    comment: 'Агрррр!',
    date: 'October 28, 2021',
    id: 1,
    rating: 1.0,
    user: {
      id: 1,
      name: 'Дракон',
    },
  },
];
