const express = require("express");
const db = require("../models")

const createProduct = async (req, res)  => {
    try{
        const {productName , price , qty} = req.body;
        const newProduct = await db.Products.create({
            productName : productName,    
            price : price,
            qty : qty
        });

        res.status(201).json(newProduct);
    }catch(err){
        console.log(err);
        res.status(500).json({error : "error creating the product"})
    }
}

const getAllProducts = async (req, res)=>{
    try{
        const allProducts = await db.Products.findAll();
        res.status(201).json(allProducts);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "error connecting db"})
    }
}

const getProductById = async  (req, res)=>{
    try{
        const prd = await db.Products.findByPk(req.params.id);
        res.status(201).json(prd);
    }catch(err){
        console(err);
        res.status(500).json({error : "error connectin database"});
    }
}

const UpdateProductById = async (req, res)=>{
    const { id } = req.params;
    const updatedData = req.body;

    try{
        const [rowsUpdated, [updatedProduct]] = await db.Products.update(updatedData, {
            where: { id: id },
            returning: true,
        });
        if(rowsUpdated === 0 ){
            res.status(400).json({error : "Product not found"});
        }
        res.status(200).json(updatedProduct);

    }catch(err){
        console(err);
        res.status(500).json({error : "error connectin database"});
    }
}

const deleteProductById = async (req , res)=>{
    try{
        const prd = await db.Products.findByPk(req.params.id);
        if(!prd){
            res.status(400).json({error : "Product not found"});
        }
        await prd.destroy();
        res.status(200).json({message : "product deleted of ID : ${req.params.is}"})

    }catch(error){
        console(err);
        res.status(500).json({error : "error connectin database"});
    }
} 

module.exports = {
    createProduct , getAllProducts , getProductById , UpdateProductById , deleteProductById
};