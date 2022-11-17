import Students from "../db/models/Student";



export class StudentDal {

    public createStudent(Student: any) {
      Student = new Students({
          Email:Student.Email,
          Password: Student.Password,
          FirstName:Student.FirstName,
          LastName:Student.LastName,
          ID:Student.ID
        });
        
        Student.save(function (err: any, results: any) {
          return results;
        });
        
    }


    public findAll(query: any = null) {
        return Students.find();
      }
}
