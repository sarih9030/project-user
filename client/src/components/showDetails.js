import { setState } from "expect";
import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'



function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
 export default connect(mapStateToProps)( function ShowDetails(props) {
// const [user,setUser]=useState({

// })
    return (
        <div>
           <h1>ShowDetails</h1>

           <Card
             bg='Success'
             style={{ width: '50rem' }}
             className="mb-2"
           >
             <Card.Header>you</Card.Header>
             <Card.Body>
               <Card.Title>--- details ---</Card.Title>
               <Card.Text>
            my name is:<input value={user.full_name} placeholder="full name" disabled/>
               </Card.Text>         
               <Card.Text>
               my email is:<input value={user.email} placeholder="email" disabled/>
               </Card.Text>
               <Card.Text>
               i have {user.age} years old
               </Card.Text>
               <Card.Text>
               from city {user.city}
               </Card.Text>
             </Card.Body>
           </Card> 


        
        </div>
    );
} 
 )

