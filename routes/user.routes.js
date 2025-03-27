import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "Get all User" }));
userRouter.get("/:id", (req, res) => res.send({ title: "Get User details" }));
userRouter.post("/", (req, res) => res.send({ title: "Create new User" }));
userRouter.put("/:id", (req, res) => res.send({ title: "Updates User" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "Delete a User" }));

export default userRouter;