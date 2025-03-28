import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';
import { logout, getMe } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protect.route.js';

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout)

export default router;