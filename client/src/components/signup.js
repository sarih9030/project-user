import React, { useState, useEffect } from "react";
import {Form, Button} from 'react-bootstrap';
import {createUser} from '../service';
import {createUserToState} from '../reducer/action'
// import {Redirect} from 'react-router-dom';




function mapStateToProps(state) {
  return {
      user: state.user,
  };
}
export default connect(mapStateToProps)( function SignUp(props) {
  const { user, dispatch } = props;
  const [userState,setUserState]=useState({
    full_name:"",
    age:0,
    city:"",
    email:"",
    phone_number:""
  }
    );
    const  handleSubmit=async ()=>{
  
        try{
  await createUser(UserState);
   dispatch(createUserToState(userState));
  console.log("saved!");
        }
        catch(error){
console.log("error:"+error);
        }
      }
   
 
    return (
        <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" onChange={(e) => setUserState({full_name:e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" onChange={(e) => setUserState({age:e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" onChange={(e) => setUserState({city:e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser({email:e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone number" onChange={(e) => setUserState({phone_number:e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          save
        </Button>
      </Form>
    );
} )