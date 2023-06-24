// const works = [
//   {
//     id: 759853,
//     title: 'placeholder title',
//     desc: 'description',
//     img: 'https://ik.imagekit.io/fibwovbqe/designs/design-1.jpg',
//   },
//   {
//     id: 589433,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/greyandgreen.svg',
//   },
//   {
//     id: 253724,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/pastel.svg',
//   },
//   {
//     id: 136781,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/reminder.svg',
//   },
//   {
//     id: 903284,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/grainy.svg',
//   },

//   {
//     id: 898249,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/blanket.svg',
//   },
//   {
//     id: 479382,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/yellowthurs.svg',
//   },
//   {
//     id: 178323,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/greyidk.svg',
//   },

//   {
//     id: 839482,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/top 3 producrts.svg',
//   },
//   {
//     id: 637284,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/beach.svg',
//   },
//   {
//     id: 893475,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/hair.svg',
//   },
//   {
//     id: 367439,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/wax.svg',
//   },
//   {
//     id: 895489,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/purplethur.svg',
//   },
//   {
//     id: 645356,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/goodmorning.svg',
//   },
//   {
//     id: 643533,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/test.svg',
//   },
//   {
//     id: 382031,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/black&white.svg',
//   },
//   {
//     id: 372831,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/yogo.svg',
//   },

//   {
//     id: 327811,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/top3not3.svg',
//   },
//   {
//     id: 438923,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/thanks.svg',
//   },
//   {
//     id: 438953,
//     title: 'placeholder title',
//     desc: 'description',
//     img: '/images/affirmations.svg',
//   },
// ];

function createDesign() {
  const works = [];
  for (let i = 1; i <= 20; i++) {
    let design = {
      id: i,
      img: `https://ik.imagekit.io/fibwovbqe/currentDesigns/design-${i}.jpg`,
    };
    works.push(design);
  }
  return works;
}

module.exports = {
  createDesign,
  getOne,
};

function getOne(id) {
  id = parseInt(id);

  return works.find((work) => work.id === id);
}
