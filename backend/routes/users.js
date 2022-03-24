import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  createClient,
  getClient,
} from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);

router.post("/client", createClient);
router.get("/clients", getClient);

export default router;
