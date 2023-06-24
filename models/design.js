module.exports = {
  createDesign,
  getOne,
};
const photos = 26;
const works = [];
function createDesign() {
  while (works < photos) {
    for (let i = 1; i < photos; i++) {
      let design = {
        id: i,
        img: `https://ik.imagekit.io/fibwovbqe/currentDesigns/25Designs/design-${i}.jpg`,
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
