const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
  full_name:{
        type: String
    }
    , age:{
        type:Number
    },
    city:{
      type:String
    },
    email:{
      type:String
    },
    phone_number:{
      type:String
    }
    
})
//middleware to remove
userSchema.pre('remove',async function(next){
  await  Weather.deleteMany({_id:{$in:this.weathers}});
next();
})
//midelware to add
userSchema.post('save',()=>{
console.log("save succesfully");
})
module.exports=mongoose.model('user',userSchema);