import produce from 'immer'
const initialState={
    user:{
        full_name:"",
        age:0,
        city:"",
        email:"",
        phone_number:""
    }
}
export default produce((state,action)=>{
    switch(action.type){
        case 'CREATE_USER':{
            state.user=action.payload.user;
            break;
        }
    }
}, initialState);
