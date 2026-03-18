import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit:"16kb"}))


// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Student Search API is running..."
  });
});

//routes declartion
import studentRoutes from "./routes/student.routes.js"
app.use("/api/v1/students",studentRoutes);

export {app}
