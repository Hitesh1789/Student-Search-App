import { Router } from "express";
import { searchStudents } from "../controllers/student.controller.js"

const router = Router()

router.route("/search").get(searchStudents)

export default router;