const buttons = [
  {
    id: 1,
    name: "Primero",
    loading: false,
    action: "first",
  },
  {
    id: 2,
    name: "Anterior",
    loading: false,
    action: "before",
  },
  {
    id: 3,
    name: "Random",
    loading: false,
    action: "random",
  },
  {
    id: 4,
    name: "Siguiente",
    loading: false,
    action: "after",
  },
  {
    id: 5,
    name: "Ultimo",
    loading: false,
    action: "last",
  },
];

export const actions = {
  first: {
    method: "getComic",
    param: 1,
    sum: false,
  },
  before: {
    method: "getComic",
    param: -1,
    sum: true,
  },
  random: {
    method: "getRandom",
    param: 0,
    sum: false,
  },
  after: {
    method: "getComic",
    param: 1,
    sum: true,
  },
  last: {
    method: "getLast",
    param: 0,
    sum: false,
  },
};

export default buttons;
