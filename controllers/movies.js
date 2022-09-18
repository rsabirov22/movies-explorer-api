const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const NoAccessError = require('../errors/NoAccessError');

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  return Movie.create({
    country,
    director,
    owner: req.user._id,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  })
    .then((movie) => {
      res.status(201).send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Невалидные данные'));
      } else {
        next(err);
      }
    });
};

// const getCards = (req, res, next) => (
//   Card.find({})
//     .populate('owner')
//     .then((card) => {
//       res.status(200).send(card);
//     })
//     .catch(next)
// );

const removeMovie = (req, res, next) => (
  Movie.findById(req.params.movieId)
    .orFail(() => new NotFoundError('Передан несуществующий id карточки'))
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        return next(new NoAccessError('Нет прав на удаление карточки'));
      }
      return movie.remove()
        .then(() => res.send({ message: 'Карточка удалена' }));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('Переданы невалидные данные'));
      } else {
        next(err);
      }
    })
);

module.exports = { createMovie, getCards, removeMovie };
