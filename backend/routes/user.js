import express from 'express';
import { getUsers } from '../controllers/user.js';

import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.get('/', isAuth, getUsers);

export default router;
