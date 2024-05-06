import type { RequestHandler } from 'express';

export default function cors(): RequestHandler {
  return function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    console.log('setting headers');
    next();
  };
}
