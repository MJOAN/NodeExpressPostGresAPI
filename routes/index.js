var express = require('express');
var router = express.Router();

const agencyController = require('../controllers').agency;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Agency Router */
router.get('/api/agency', agencyController.list);
router.get('/api/agency/:id', agencyController.getById);
router.post('/api/agency', agencyController.add);
router.put('/api/agency/:id', agencyController.update);
router.delete('/api/agency/:id', agencyController.delete);

/* Advance Router */
router.post('/api/agency/add_vehicle', agencyController.addVehicle);

module.exports = router;
