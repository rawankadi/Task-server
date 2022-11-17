import { Request, Response } from "express";
import { MentorService } from "../services/Mentor.service";



export class MentorController {
    public static async getMentor(req: Request, res: Response) {
    const service = new MentorService();
    const Mentor = await service.getMentor();
    return res.send(Mentor);
};

 public static async createMentor(req: Request, res: Response) {
    const params = req.body;
    const service = new MentorService();
    const Mentor = await service.createMentor(params);
    return res.send(Mentor);
};
};