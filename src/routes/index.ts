import express from 'express';
import MentorRoutes from './Mentor.routes';
import StudentRoutes from './Student.routes';


const router = express.Router();
router.use('/api/Student/',StudentRoutes);
router.use('/api/Mentor/',MentorRoutes);
export default router;