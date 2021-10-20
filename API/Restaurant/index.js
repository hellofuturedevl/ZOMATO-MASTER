import {RestaurantModel} from "../../database/allModels";


const Router = express.Router();

/*
Route        /
Des          get all Restaurant Details
params       None
Access       Public
Method       GET
*/

Router.get("/", async(req,res)=>{
  try{
   const {city} = req.query;
   const restaurants = await RestaurantModel.find({city});
   return res.json({restaurants});
  }catch(error){
   return res.status(500).json({error});
  }
});

/*
Route        /
Des          get particular Restaurant Details on id
params       _id
Access       Public
Method       GET
*/

Router.get("/:_id", async(req,res)=>{
  try{
   const {_id} = req.params;
   const restaurants = await RestaurantModel.findOne(_id);

   if(!restaurant)

   return res.status(404).json(error:"Restaurant Not Found");

   return res.json({restaurant});
  }catch(error){
   return res.status(500).json({error:"error.message"});
  }
});

/*
Route        /
Des          get  Restaurant Details on search
params       none
body         searchString
Access       Public
Method       GET
*/

Router.get("/search", async(req,res)=>{
  try{
    const {searchString} = req.body;

    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"},

    });

     return res.json({restaurants});

  } catch(error){
     return res.status(500).json({error: error.message});
  }
});



export default Router;
