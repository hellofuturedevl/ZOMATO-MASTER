/*import googleoAuth from "passport-google-oauth20";

import {UserModel} from "../database/allModels";

import passport from "passport";


const GoogleStrategy = googleoAuth.Strategy;



export default (passport) =>{
    passport.use(
        new GoogleStrategy({
            cliendID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        },
        async(accessToken, refreshToken, profile, done) =>{
            //creating a new user
            const newUser ={
                fullname: profile.displayname,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
            };
    try{
        //check whether user exists or not
        const user = await UserModel.findone({email: newUser.email});

        if(user){

            //generating JWT token
        const token = user.generateJWTToken();
            //return user
            done(null,{user,token});
        }else{
            //create new ,user
            const user = await UserModel.create(newUser);
             //generating JWT token
        const token = user.generateJWTToken();
        done(error,null);
        }
    }catch(error){
        //return user
        done(error,null);

    }
        }
        )

    );

    passport.serialazieUser((userData,done) => done(null, {...userData}));
    passport.deserialazieUser((id,done) => done(null, id));


};
*/
