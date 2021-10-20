import mongoose from "mongoose";
require('dotenv/config')
console.log(process.env.MONGO_URL)

export default async () => {
  return mongoose.connect(process.env.MONGO_URL,{

  });
};