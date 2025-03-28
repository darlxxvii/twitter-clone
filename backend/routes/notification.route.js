import express from "express";
import { protectRoute } from "../middleware/protect.route.js";
import { deleteNotifications, getNotifications, deleteNotification } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/:id", protectRoute, deleteNotification);



export default router;

