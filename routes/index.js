const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkAuth');

router.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', name: req.session.name } );
});


router.get('/', isPrivate, (req, res) => {
  res.render('home', { pageTitle: 'Home', name: req.session.name } );
});

module.exports = router;
