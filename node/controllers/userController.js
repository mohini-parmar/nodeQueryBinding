const express = require("express");
const db = require("../models");

const createUser = async (req, res) => {
    try{
        const {username , password} = req.body;

        const newUser = await db.Users.create({
            username : username,    
            password : password
        });

        res.status(201).json(newUser);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "error creating the user"})
    }
}

const getAllUsers = async (req, res)=>{
    try{
        const allData = await db.Users.findAll();
        if(!allData){
            res.status(400).json({error:"Table is Empty"})
        }else{
            res.status(201).json(allData)
        }
    }catch(err){
        res.status(500).json({error : "error fetching data from server"})
    }
}

const getUserById = async(req,res)=>{
    try{
       const userData = await db.Users.findByPk(req.params.id);
       if(!userData){
        res.status(400).json({error:"User Does not exist"})
       }else{
        res.status(201).json(userData);
       }
    }catch(err){
        res.status(500).json({error : "error fetching data from server"})
    }
}

const updateUserById = async(req,res)=>{
    try{
        const {username , password} = req.body;
        const user = await db.Users.findByPk(req.params.id);
        if(!user){
            res.status(400).json({error:"User Does not exist"})
           }else{
            user.username = username;
            user.password = password;
            await user.save();

            res.json(user);
           }
    }catch(err){
        res.status(500).json({error : "error fetching data from server"})
    }
}

const deleteUser = async(req,res)=>{
    try{
        const user = await db.Users.findByPk(req.params.id);
        if(!user){
            res.status(400).json({error:"User Does not exist"})
           }else{
            await user.destroy();
            res.json({ message: 'User deleted' });
           }
    }catch(err){
        res.status(500).json({error : "error fetching data from server"})
    }
}
module.exports = {
    createUser , getAllUsers , getUserById , updateUserById ,deleteUser
};