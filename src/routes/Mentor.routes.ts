import { Router } from "express";
import { MentorController } from "../controllers/MentorConroller";



const router = Router();

router.get("/getMentor", MentorController.getMentor);
router.post("/createMentor", MentorController.createMentor);

export default router;