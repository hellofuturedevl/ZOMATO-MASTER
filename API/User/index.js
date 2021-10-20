import express from  "express";

import {UserModel} from "../../database/allModels";

const Router = express Router();




/*
Route     /_id
Descrip   get user data
params    _id
BODY      NONE
Access    Public
method    GET
*/

Router.post("/_id", async(req,res){
  try{
   const {_id} = req.params;
   const getUser = await UserModel.findById(_id);
   return res.json({user: getUser});
} catch(error) {
      return res.status(500).json(error: error.message);
  }
});


/*
Route     /update
Descrip   update an  user data
params    _id
BODY      user data
Access    Public
method    PUT
*/

Router.put("/update/:_userId", async(req,res){
  try{

   const {userid} = req.params;
   const {userData } = req.body;
   const updateUserData = await UserModel.findByIdAndUpdate(
     userId,
     {
        $set : userData
     },
     {new: true}
   );

   return res.json({user: updateUserData});

} catch(error) {
      return res.status(500).json(error: error.message);
  }
});







export default Router;
