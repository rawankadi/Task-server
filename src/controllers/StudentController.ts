import { Request, Response } from "express";
import { StudentService } from "../services/Student.service";



export class StudentController {
    public static async getStudent(req: Request, res: Response) {
    const service = new StudentService();
    const Students = await service.getStudent();
    return res.send(Students);
};

 public static async createStudent(req: Request, res: Response) {
    const params = req.body;
    const service = new StudentService();
    const Student = await service.createStudent(params);
    return res.send(Student);
};
};