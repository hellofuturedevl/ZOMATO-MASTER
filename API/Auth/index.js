import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";


const Router = express.Router();

// models

import {UserModel} from "../../database/user";
/*
Route     SignUp
Descrip   Signup with email and password
params    None
Access    Public
method    POST
*/

Router.post("/signup", async(req,res)=>{
try{
 await UserModel.findEmailAndPhone(req.body.credentials);


 // database

const newUser = await UserModel.create(req.body.credentials);


//JWT Auth token

const token = newUser.generateJwtToken();

return res.status(200).json({token});

}
catch (error)

{

    return res.status(500).json({error: error.message});
}

});


/*
Route     Signin
Descrip   Signin with email and password
params    None
Access    Public
method    POST
*/

Router.post("/signin", async(req,res)=>{
    try{

     const user = await UserModel.findEmailAndPassword(
         req.body.credentials
     );


    //JWT Auth token

    const token = user.generateJwtToken();

    return res.status(200).json({token, status: "success"});

    }
    catch (error)

    {

        return res.status(500).json({error: error.message});
    }

    });


/*
Route     /google
Descrip   google Signin
params    None
Access    Public
method    GET
*/


/*Router.get("/google", passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"

    ],
})
);

*/

/*
Route     /google/callback
Descrip   google Signin callback
params    None
Access    Public
method    GET
*/

/*Router.get("/google", passport.authenticate("google",{failureRedirect:"/"}),
(req,res)=>{
    return response.json ({token: req.session.passport.user.token});
}
);

*/

export default Router;


//UserModil.OurStatic()
//checkUserByEmail.ourMethods()
