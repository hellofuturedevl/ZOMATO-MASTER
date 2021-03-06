//libraries

import express from "express";
//import passport from "passport"; - optional not needed



//database

import {FoodModel} from "../../database/allModels";

const Router = express.Router();

/*
Route        /
Des          get all fooods baes on particular Restaurant
params       _id
Access       Public
Method       GET
*/

Router.get("/:_id", async(req,res) => {
  try{

    const{_id} = req.params;
    const foods = await FoodModel.find({ restaurant: _id});

    return res.json({foods});
  } catch(error) {
    res.status(500).json(error: error.message);
  }
});


/*
Route        /r
Des          get all fooods baesd on particular category
params       category
Access       Public
Method       GET
*/

Router.get("/r/:category",async(req,res)=>{
  try{

    const {category} = req.params;
    const foods = await FoodModel.find({
    category: {$regex: category, $options: "i"}

    });

    return res.json ({foods});

  } catch(error) {

    res.status(500).json(error: error.message);

  }

});



export default Router;
