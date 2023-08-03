import express from "express";
import UserController from "../controllers/UserController";
const router = express.Router();

router.post('/create',UserController.create);
router.get('/edit/:id',UserController.editPage);
router.get("/delete/:id", UserController.deleteUser);
router.post("/edit/update/:id", UserController.edit);

module.exports = router;