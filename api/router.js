import Router from '@koa/router';
import * as users from './app/users/index.js';
import * as hints from './app/hints/index.js';
import * as games from './app/games/index.js';

export const router = new Router();

router.get('/login', users.login);

router.post('/users', users.create);

router.get('/users', users.list);

router.get('/users/hints/:username', users.hints);

router.post('/hint', hints.create);

router.get('/games', games.list);
