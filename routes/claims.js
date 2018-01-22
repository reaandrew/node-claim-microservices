const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('', (req, res) => {
  res.render('claim-form', {
    title: 'Submit a new claim',
  });
});

router.post('', (req, res) => {
  res.redirect('/claims/thankyou');
});

router.get('/thankyou', (req, res) => {
  res.render('thankyou', {
    title: 'Thank you',
  });
});

module.exports = router;
