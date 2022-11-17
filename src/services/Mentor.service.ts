import { MentorDal } from "../dal/Mentor.dal";



export class MentorService {

        
    public async getMentor() {
        const dal = new MentorDal();
        const res = await dal.findAll();
        return res;
    };

    public async createMentor(Mentor:any) {
        const dal = new MentorDal();
        const res = dal.createMentor(Mentor);
        return res;
    };

};