import { jwt as jwtMiddleware } from '../jwt/jwt.middleware';

const authorization = (routesWhiteList = []) => (req, res, next) => (
  routesWhiteList.some(route => route === req.path)
    ? next()
    : jwtMiddleware(req, res, next) // auth the user if requested path isn't from the white list
);

export { authorization };
