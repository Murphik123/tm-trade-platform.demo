const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', [
  body('name').notEmpty().withMessage('Имя обязательно'),
  body('email').isEmail().withMessage('Неверный email'),
  body('phone').notEmpty().withMessage('Телефон обязателен'),
  body('password').isLength({ min: 6 }).withMessage('Пароль должен быть не менее 6 символов'),
], register);

router.post('/login', login);
router.get('/me', auth, getMe);

module.exports = router;
