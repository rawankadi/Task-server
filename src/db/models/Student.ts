import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema(
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
        },
        ID:{
          type: Number,
          required: true
        }
         }
          );
  
  const Students = mongoose.model('Studnts', StudentSchema);
    
  export default Students;   