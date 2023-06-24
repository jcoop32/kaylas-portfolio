module.exports = {
  createDesign,
  getOne,
};
const works = [];
function createDesign() {
  while (works < 21) {
    for (let i = 1; i < 21; i++) {
      let design = {
        id: i,
        img: `https://ik.imagekit.io/fibwovbqe/currentDesigns/design-${i}.jpg`,
      };
      works.push(design);
    }
  }
  return works;
}

function getOne(id) {
  id = parseInt(id);

  return works.find((work) => work.id === id);
}
