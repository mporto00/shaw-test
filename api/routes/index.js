const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Back-end Shaw And Partners' });
});

module.exports = router;
