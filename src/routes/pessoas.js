const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController');

router
    .get('/people', PessoaController.getAll)
    .post('/people', PessoaController.create)
    .get('/people/:id', PessoaController.getById)
    .put('/people/:id', PessoaController.update)
    .delete('/people/:id', PessoaController.delete)

module.exports = router;


