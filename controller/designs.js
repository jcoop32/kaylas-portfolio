const Design = require('../models/design');
module.exports = {
  index,
  show,
};

async function index(req, res) {
  try {
    const alldesigns = await Design.getAll();
    res.render('designs/index', {
      work: alldesigns,
      title: 'Designs',
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function show(req, res) {
  try {
    const oneDesign = await Design.getOne(req.params.id);
    res.render('designs/show', {
      work: oneDesign,
      title: 'Designs',
    });
  } catch (err) {
    console.log(err.message);
  }
}
