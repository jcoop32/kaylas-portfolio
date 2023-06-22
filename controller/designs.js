const Work = require('../models/design');
module.exports = {
  index,
};

async function index(req, res) {
  try {
    res.render('designs/index', {
      work: await Work.getAll(),
      title: 'Designs',
    });
  } catch (err) {
    console.log(err.message);
  }
}
