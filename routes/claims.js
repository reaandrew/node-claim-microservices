const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('', (req, res) => {
  res.render('index', {
    title: 'Submit new claim',
  });
});

module.exports = router;
