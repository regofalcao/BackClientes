var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();
const authMiddleware = require('../middlewares/auth');

/* GET home page. */
router.get('/', function(req, res) {
  return res.json({ping: 'pong'})
});

router.post('/register', UserController.createUser);
router.post('/register-client', UserController.createClient);
router.post('/authenticate', UserController.authenticate);
router.get('/client', authMiddleware, UserController.getClient);
router.put('/client', authMiddleware, UserController.updateClient);
router.delete('/client/:userId', authMiddleware, UserController.deleteClient);

module.exports = router;

// authMiddleware,