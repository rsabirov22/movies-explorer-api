const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');

router.post('/api/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
router.post('/api/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);
router.get('/api/signout', (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  }).send({});
});
router.use(auth);
router.use('/api/users', usersRouter);
router.use('/api/movies', moviesRouter);

module.exports = router;
