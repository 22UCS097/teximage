import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"
import path from 'path'

 const __dirname=path.resolve();


const PORT=process.env.PORT || 4000
const app =express();

app.use(express.json())
app.use(cors());

 await connectDB();

app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get("*",(req,res)=>{
     res.sendFile(path.join(__dirname,'client','dist','index.html'));
})


app.listen(PORT,()=> console.log("server started",PORT));
