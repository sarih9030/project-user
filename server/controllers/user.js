const User = require('../models/user');


const CreateUser=async (req,res)=>{
   
    let NewUser= new User(req.body);
    try     {
        await User.save();
        res.status(200).send.JSON({'message':NewUser});
    }
    catch(err){
        res.status(500).send(err);
    }
 

}

const GetAllUsers=async (req,res)=>{
    try{
    
        let users= await User.find()
       res.status(200).send.json({users:users});
    }
    catch(err){
        res.status(500).send("error"+err);
    }
    }

const GetUserById=async (req,res)=>{
try{

    let user= await User.findById( req.params.idUser)
   res.status(200).send.json({user_by_id:user});
}
catch(err){
    res.status(500).send("error"+err);
}
}

module.exports={CreateUser,GetUserById,GetAllUsers};