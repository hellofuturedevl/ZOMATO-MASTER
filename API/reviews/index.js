import express from  "express";

import {ReviewModel} from "../../database/allModels";

const Router = express Router();




/*
Route     /new
Descrip   add new review
params    findOne
BODY      review object
Access    Public
method    POST
*/

Router.post("/new", async(req,res){
  try{
  const {reviewData} = req.body;

   await ReviewModel.create(reviewData);

   return res.json({review: "Successfully created Review"});
} catch(error) {
      return res.status(500).json(error: error.message);
  }
});

/*
Route     /delete
Descrip   delete a  review
params    _id
Access    Public
method    DELETE
*/

Router.delete("/delete/:_id", async(req,res){
  try{
    const {_id} = req.params;

   await ReviewModel.findByIAndDelete(_id);

   return res.json({review: "Successfully Deleted a Review"});
} catch(error) {
      return res.status(500).json(error: error.message);
  }
});




export default Router;
