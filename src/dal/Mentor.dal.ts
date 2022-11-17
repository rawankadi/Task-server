import Mentors from "../db/models/Mentor";



export class MentorDal {

    public createMentor(Mentor: any) {
      Mentor = new Mentors({
          Email:Mentor.Email,
          Password: Mentor.Password,
          FirstName:Mentor.FirstName,
          LastName:Mentor.LastName
        });
        
        Mentor.save(function (err: any, results: any) {
          return results;
        });
        
    }


    public findAll(query: any = null) {
        return Mentors.find();
      }
}
