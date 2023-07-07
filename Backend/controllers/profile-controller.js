const {validationResult} =require('express-validator');
const HttpError = require('../models/http-error');
const Profile= require('../models/profile');
const firebase=require("../firebase");
const mongoose =require('mongoose');



 const users=mongoose.model("profiles");
 
const createProfile=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return next(
        new HttpError('Invalid input',422)
       );
    }
    const {name,branch,club,links,skills,year,description,userId}=req.body;
    console.log(req.body);
    console.log(name,branch,club,links,skills,year,description);

    const createdProfile=new Profile({
        name,
        branch,
        club,
        links,
        skills,
        year,
        description
       
        
    });
    try{
      await createdProfile.save();
    }catch(err){
        const error=new HttpError('creating profile failed try again',
        500);
        return next(error);
    }
    res.status(201).json({profile: createdProfile});
};
const getProfileById=async(req, res, next)=>{
    const userId=req.params.pid;
    let profile;
    try{
        profile=await Profile.findById(userId); 
    }catch(err){ 
        const error=new HttpError('Something went wrong profile not found',500
        );
        return next(error);
    }
    
  if (!profile) {
    const error = new HttpError(
      'Could not find a profile for the provided id.',
      404
    );
    return next(error);
  }
  // console.log(userId);
  // console.log(profile);
  res.json({ profile: profile.toObject({ getters: true }) });
}
const getProfileByUser= async(req, res,next) => {
      // const Profileuser=req.params.uid;
    let userId ;
   firebase.auth().onAuthStateChanged((user) =>{
    if(user){
    userId=user.uid;
    console.log(userId);
    }
   })
    let profile;
    try{
      profile=await Profile.find({userId:userId});
    }catch(err){
      const error= new HttpError('SOMETHING WENT WRONG',500);
      return next(error);
    }
    
    if(!profile){
      return next(new HttpError('Could not find a place for the provided id',404));
    }
    res.json({profile: profile.map(profiles=>profiles.toObject({getters:true}))});
  };
  const updateProfile = async(req, res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
  
    const { name, branch ,club,links,skills,year,description} = req.body;
    const profileId = req.params.pid;
  
    let profile;
    try {
      profile = await Profile.findById(profileId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not update place.',
        500
      );
      return next(error);
    }
   
    profile.name = name;
    profile.branch = branch;
    profile.club= club;
    profile.links= links;
    profile.skills=skills;
    profile.year=year;
    profile.description=description;
    


  
    try {
      await profile.save();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not update place.',
        500
      );
      return next(error);
    }
  
    res.status(200).json({ profile: profile.toObject({ getters: true }) });
  };
  const deleteProfile = async (req, res, next) => {
    const profileId = req.params.pid;
  
    let profile;
    try {
      profile = await Profile.findById(profileId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete place.',
        500
      );
      return next(error);
    }
  
    try {
      await profile.remove();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete place.',
        500
      );
      return next(error);
    }
  
    res.status(200).json({ message: 'Deleted place.' });
  };
  const getallProfile=async(req,res,next)=>{
    try{
      const allusers=await users.find({});
     
      res.send({status:"ok",data:allusers});
    } 
    catch(err){
      console.error('Error fetching user profile:', err);
      res.status(500).json({error:'Internal Server Error'});
    }
  };
  
exports.createProfile=createProfile;
exports.getProfileById=getProfileById;
exports.getProfileByUser= getProfileByUser;
exports.updateProfile= updateProfile;
exports.deleteProfile= deleteProfile;
exports.getallProfile=getallProfile;