import express from "express";
import UserModel from "../models/userModel.js";
const router=express.Router();

//Register user
router.post("/register",async (req,res)=>{
        try {
            const response = await UserModel.create(req.body);
            res.status(201).json(response);
        } catch (error) {
            res.status(500).json({ErrorMessage:error.message});
        }
});
//Logout 
router.get("/logout", (req,res)=>{
   try{
    req.session.destroy();
    res.json({status:true})
   }
   catch(error){
    console.log("err")
   }
});
//Login user
router.post("/login",async (req,res)=>{
    try{
    const email=req.body.email;
    const password=req.body.password;
    const response=await UserModel.findOne({email:email});
    if(response.password==password){
        req.session.username=response.username;
        res.status(200).json({status:true,res:response});
    }
    else{
        res.status(200).json({ErrorMessage:"Password does not match",status:false});
    }
    }catch(error){
        res.status(200).json({ErrorMessage:"Invalid Email or password",status:false});
    }
});

router.get("/",(req,res)=>{
    if(req.session.username){
        return res.json({valid:true,username:req.session.username})
    }
    return res.json({valid:false});
})
export default router;