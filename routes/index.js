const express = require('express');

const kafka = require('kafka-node');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const client = new kafka.KafkaClient({ kafkaHost: 'vagrant:9092' });
  res.render('index', {
    title: 'Express',
    client,
  });
});

module.exports = router;
