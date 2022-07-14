import express from "express";
import { edit, deleteUser, see, logout } from "../controllers/userController";

//users/:id
//users/logout
//users/edit
//users/delete

const userRouter = express.Router();

//non-id
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/deleteUser", deleteUser);

//id
userRouter.get("/:id", see);

export default userRouter;
