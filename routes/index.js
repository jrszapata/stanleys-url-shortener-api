var express = require('express');
var router = express.Router();

const {redirect} = require('../controllers/RedirectorController');
const {store, getList}  = require('../controllers/UrlController');
const {notFound} = require('../controllers/NotFoundController');

router.post('/api/urls', store);

router.get('/api/urls', getList);

router.get('/api/top-urls', getTop);

router.get('/:hash', redirect);

router.use('/', notFound);

module.exports = router;
