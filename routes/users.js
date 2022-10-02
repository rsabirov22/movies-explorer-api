const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { editUser, getCurrentUser } = require('../controllers/users');

router.get('/users/me', getCurrentUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), editUser);

module.exports = router;
