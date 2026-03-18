console.log("Ram")
import {app} from "./app.js";
import dotenv from "dotenv";

dotenv.config({ 
    path:'./.env'
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});