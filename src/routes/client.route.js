const router = require('express').Router();
const clientController = require('../controllers/client.controller');
const validate = require('../middlewares/validate');

router
  .get('/', clientController.getClients)
  .post('/', validate('createClient'), clientController.createClient)
  .get('/:id', clientController.getClients)
  .put('/:id', validate('createClient'), clientController.updateClient)
  .delete('/:id', clientController.deleteClient);

module.exports = router;