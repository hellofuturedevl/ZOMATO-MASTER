//libraries

import express from "express";

//database
import {MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router();

/*
Route        /list
Des          get  the list  Menu of particular _id
params       _id
Access       Public
Method       GET
*/

Router.get("/list/:_id", async(req,res) =>{
  try{

  const {_id} = req.params;
  const menus = await MenuModel.findOne(_id);

   return res.json({menus});

  }  catch(error) {

    return res.status(500).json({error: error.message});
  }

});


/*
Route        /image
Des          get  image based on  _id
params       _id
Access       Public
Method       GET
*/

Router.get("/image/:_id", async(req,res) =>{
  try{

  const {_id} = req.params;
  const menus = await ImageModel.findOne(_id);

   return res.json({menus});

  }  catch(error) {

    return res.status(500).json({error: error.message});
  }

});

export default Router;
