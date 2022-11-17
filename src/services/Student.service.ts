import { StudentDal } from "../dal/Student.dal";



export class StudentService {
        public async getStudent() {
            const dal = new StudentDal();
            const res = await dal.findAll();
            return res;
        };

        public async createStudent(Student:any) {
            const dal = new StudentDal();
            const res = dal.createStudent(Student);
            return res;
        };

};