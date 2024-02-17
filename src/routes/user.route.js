import { Router } from "express";
import { 
    createUser,
    getAllUser,
    getUserById,
    updatePassword,
    deleteUser
 } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.post("/new-user", (req, res) => {
    const { name, email, password } = req.body;
    const newUser = createUser(name, email, password);
    res.status(201).json({newUser});
});

userRoute.get("/users", (req, res) => {
    const users = getAllUser();
    res.json({users});
});

userRoute.get("/user-find-id/:id", (req, res) => {
    const id = req.params.id;
    const userFindId = getUserById(id);
    res.json({userFindId});
});

userRoute.patch("/password-update/:id", (req, res) => {
    const id = req.params.id;
    const { email, newPassword } = req.body;
    const passwordUpdate = updatePassword(id, email, newPassword);
    res.json({passwordUpdate});
});

userRoute.delete("/delete-user/:id", (req, res) => {
    const id = req.params.id;
    const { email, password } = req.body;
    const delUser = deleteUser(id, email, password);
    res.json({delUser})
});

export { userRoute }