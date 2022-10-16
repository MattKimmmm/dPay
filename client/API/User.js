import React from 'react';
import sampleUser from '../sampleUser.js'

export const getUser=async (userID,username,password)=>{
    if(userID==null){
        return null;
    }
    else{
        return sampleUser;
    }
}

 //return multiple user's userID and username 
export const getUsers=async(userIDs) =>{
   //userIDs is an array of userIDs
}