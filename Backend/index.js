import express from 'express';
import scrapeRoute from './router/scrape.route.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOption={
    origin:"*",
    Credentials:true
};
app.use(cors(corsOption));
app.use("/file",scrapeRoute);
const PORT=8080;
app.listen(PORT,()=>{
    console.log("server running..."+PORT);
})