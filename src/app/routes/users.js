
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
router.get('/',usersController.index);
router.get('/login', usersController.index);
router.post('/login', usersController.login);
router.get('/home/dashboard', usersController.dashboard);
//router.get('/users/signup', usersController.signup);
router.post('/users/signup', usersController.signup);
router.get('/logout', usersController.logout);
router.get('/ir', usersController.ir);
router.get('/ir2', usersController.ir2);
module.exports= router;

