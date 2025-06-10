import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import { ContentModel } from "./db";
import { userMiddleware } from "./middleware";
import { JWT_SECRET } from "./config";
const app=express();


app.use(express.json());
app.post("/api/v1/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username:username,
        password:password
    })

    res.json({
        message:"user sign up"
    })
});
app.post("/api/v1/signin",async (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const existingUser= await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
        
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        res.json({ token }); 
    } else {
        
        res.status(403).json({ message: "Incorrect credentials" });
    }



});
app.post("/api/v1/content",userMiddleware,async (req,res)=>{

    const link=req.body.link;
    const type=req.body.type;

    ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })

    res.json({
        message:"content added"
    })
});
app.get("/api/v1/content",userMiddleware,async (req,res)=>{
     //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");

    res.json({
        content
    })
});
app.delete("/api/v1/delete",async (req,res)=>{
    const contentId = req.body.contentId;
    //@ts-ignore
    await ContentModel.deleteMany({ contentId, userId: req.userId });
    res.json({ message: "Deleted" });
});
app.listen(3000);