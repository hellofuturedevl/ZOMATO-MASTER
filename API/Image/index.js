//libraries

import express from "express";

import AWS from "aws-sdk";

import multer from "multer";//for uploading files

// database mode;

import { ImageModel } from "../../database/allModels";

//utilities

import {s3Upload} from "../../utils/AWS/s3";

const Router = express Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({storage});




/*
Route     /
Descrip   uploading the given image
params    None
Access    Public
method    GET
*/

Router.post("/", upload.single("file"), async(req,res) =>{
  try{
    const file = req.file;

    //s3 bucket $options

    const bucketOptions ={
      Bucket: "shapeaijulybatch123",
      key : file.originalname,
      Body: file.buffer,
      ContentType : file.mimetype,
      ACL: "public-read"
    }


    const uploadImage = await s3Upload(bucketOptions);


  } catch(error){
        res.status(500).json(error: error.message);
  }
})
