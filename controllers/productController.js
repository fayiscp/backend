
let Product = require("../models/electroProduct");
const { findOne, updateOne } = require("../models/userModel");

module.exports = {

    addProduct: async (req, res) => {
        console.log(req.body);
        let { Productname,  Brandname, Category, Price, Stock } = req.body

        try {
            let result = await Product.findOne({ Productname,Brandname })
            console.log(result);

            if (result) {
                res.json("Product already exist")
            } else {

                let response = await Product.create({Productname: Productname, Brandname: Brandname, Category: Category, Price: Price, Stock: Stock})
                res.json({ message: "this is from Database", data: response });
            }

        } catch (error) {
            console.log(error);
            res.json("Product already existt")
        }
    },

    getProduct: async (req,res)=>{
        console.log(req.params);

        try {
            let result = await Product.findOne({_id:req.params.id})
            if (!result) {
                res.json({message:"product is not found"})
                
            }else{
                res.json({message:result})
            }
            
        } catch (error) {
            console.log(error);
            res.json("invalid id")
            
        }

    },

    getAllProducts: async (req,res)=>{
        try {
            let result = await Product.find()
            console.log(result);
            res.json(result)
            
        } catch (error) {
            console.log(error);
            res.json("Something wrong")
        }

    },

    deleteProducts: async (req,res)=>{
        try {
            let result = await Product.findOneAndDelete({_id:req.params.id})

            if(!result){
                res.json("No product is exist")
            }else{
                res.json("Product is deleted successfully")
            }
            
        } catch (error) {
            console.log(error);
            res.json("Invalid id or No product ")
        }

    },

    updateProducts: async (req,res)=>{

        let{Productname,  Brandname, Category, Price, Stock}= req.body
        try {
            let result = await Product.updateOne({_id:req.params.id},{
                Productname: Productname, Brandname: Brandname, Category: Category, Price: Price, Stock: Stock
            },{key:123,upsert:true})
            res.json(result)
        } catch (error) {
            console.log(error);
            res.json("wrrrrroooooooooonnnngggggg")
        }

    }



}

