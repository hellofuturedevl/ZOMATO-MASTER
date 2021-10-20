import express from  "express";

import {orderModel} from "../../database/allModels";

const Router = express Router();


/*
Route     /
Descrip   get all Orders based on id
params    _id
Access    Public
method    GET
*/

Router.get("/:_id", async(req,res) =>{
  try{
    const orders = req.parans;
    const getOrders = await OrderModel.findOne({user: _id});
   if(!getOders){
     return res.json({error: "User Not Found"});
   }

    } catch(error) {

    return res.status(500).json(error: error.message);

  }
});

/*
Route     /new
Descrip   add new order
params    _id
Access    Public
method    POST
*/

Router.post("/new/:_id", async(req,res){
  try{

  const {_id} = req.params;
  const {orderDetails} = req.body;
  const addNewOrder = await orderModel.findOneAndUpdate({
    user: _id
  },
  {
    $push: { orderDetails: orderDetails};
  },
  {
    new : true
  }
);

return res.json({order : addNewOrder});


  } catch(error) {
      return res.status(500).json(error: error.message);
  }
})




export default Router;
