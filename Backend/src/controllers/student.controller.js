import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility function to load students from local JSON file
const loadStudents = () => {
  const filePath = path.join(__dirname, "..", "data", "student_data.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};


const searchStudents = (req, res) => {
  try {
    let query = req.query.q || "";
    
    // Normalize query
    query = query.trim().replace(/\s+/g, " ").toLowerCase();

    // Only search if query has at least 3 characters
    if (query.length < 3) {
      return res.status(200).json([]);
    }

    const students = loadStudents();

    const filteredStudents = students
      .filter((student) => student.name.toLowerCase().includes(query))
      .slice(0, 5); // limit to 5 results

    return res.status(200).json(filteredStudents);
  } 
  catch (error) {
    console.log("Error in search Students controller:", error);
    
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export{
    searchStudents
}