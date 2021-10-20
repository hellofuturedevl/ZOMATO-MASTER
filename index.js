//main file
//env
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
//API
import Auth from "./API/Auth";

import Restaurant from "./API/Restaurant";

//Database connection

import ConnectDB from "./database/connection";


import passport from "passport";

//config

//import googleAuthConfig from "./config/google.config";

import Food from "./API/Food";

import Menu from "./API/Menu";

import Image from "./API/Image";

import Order from "./API/orders";

import Review from "./API/reviews";


const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);


//passpport configuration

googleAuthConfig(passport);

//for application routes
//loal host:4000/auth/signup
zomato.use("/auth", Auth);

zomato.get("/",(req,res) => res.json({message:"Setup Sucess!!!"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB Connection Failed"))
);
