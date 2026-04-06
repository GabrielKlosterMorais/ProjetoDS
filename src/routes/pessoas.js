const express = require('express');
const router = express.Router();
const gatitosController = require('../controllers/gatitosController');

router
    .get('/people', gatitosController.getAll)
    .post('/people', gatitosController.create)
    .get('/people/:id', gatitosController.getById)
    .put('/people/:id', gatitosController.update)
    .delete('/people/:id', gatitosController.delete)

module.exports = router;