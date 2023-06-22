const works = [
  {
    id: 759853,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 589433,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 253724,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 136781,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 737284,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 438923,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 839482,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 327811,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 178323,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 898249,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 637284,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 893475,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 367439,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 895489,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 645356,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 643533,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
  {
    id: 382031,
    title: 'placeholder title',
    desc: 'description',
    img: '/images/test.svg',
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return works;
}

function getOne(id) {
  id = parseInt(id);

  return works.find((work) => work.id === id);
}
