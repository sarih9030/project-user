import axios from 'axios'

export async function createUser(user){
await axios.post('http://localost:4000/CreateUser',user).
then(res=>{
    return res.data;
},
err=>{
    console.log(err);
});
}

export async function getAllUsers(){
    await axios.post('http://localost:4000/GetAllUsers').
    then(res=>{
        return res.data;
    },
    err=>{
        console.log(err);
    });
    }



    
 