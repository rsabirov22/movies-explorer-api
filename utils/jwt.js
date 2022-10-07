const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const getJwtToken = (id) => {
  const payload = id;
  return jwt.sign(
    { _id: payload },
    NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    { expiresIn: '7d' },
  );
};

module.exports = { getJwtToken };
