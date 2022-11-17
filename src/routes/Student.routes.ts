import { Router } from "express";
import { StudentController } from "../controllers/StudentController";



const router = Router();

router.get("/getStudent", StudentController.getStudent);
router.post("/createStudent", StudentController.createStudent);

export default router;