import mongoose from "mongoose";


const MentorSchema = new mongoose.Schema(
    {
        Email: {
          type: String,
          required: true
        },
        Password: {
            type: String,
            required: true
          },
        FirstName:{
          type: String,
          required: true
        },
        LastName:{
          type: String,
          required: true
        }
         }
          );
  
  const Mentors = mongoose.model('Mentors', MentorSchema);
    
  export default Mentors;   