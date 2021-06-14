import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {getAllUsers} from '../service'

import {Card } from 'react-bootstrap'


 export default  function ListUser() {
   const [userList,setUserList]=useState([]);
  const getUsers = async () => {
   
    const data= await  getAllUsers();
    const jsondata =await data.json();
    console.log(jsondata);
    if(jsondata){
      // setIsloading(false);
setUserList(jsondata);
    }
    };

  useEffect(() => {
    getUsers();
  }, []);



  // if(isLoading)
  //   return <div>
  //   <>
  //   <h2>loading...</h2>
  //   </>
  //   </div>
    return(
        <div>
          {userList?.map((item,idx)=>
             <Card
             bg='Success'
             style={{ width: '50rem' }}
             className="mb-2"
             key={idx}
           >
             <Card.Header></Card.Header>
             <Card.Body>
               <Card.Title>--- details ---</Card.Title>
               <Card.Text>
               full name: {item.full_name}
               </Card.Text>         
               <Card.Text>
               email {item.email}
               </Card.Text>
               
             </Card.Body>
           </Card> 
        )
              }
        </div>
    );


// import React, { useRef, useEffect, useState } from 'react'
// import { addQuestionToState, saveUser, deleteQuestion, createQuestion, updateQuestion } from './rducer/action'

// import { getHistoryQuestion, deleteQuestionFromData, updateQustion } from './service'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Card, Button } from 'react-bootstrap';
// import QuestionItem from './QuestionItem';
// import 'bootstrap/dist/css/bootstrap.min.css';




// }

// export default connect(mapStateToProps)(function QuestionUserList(props) {
//     const {question, dispatch} = props;

  
//     const onDeleteQuestion =   async(id) => { 
//        await deleteQuestionFromData(id)
//       dispatch(deleteQuestion(id))
//     }

//     const onEditQuestion = async (item) => {
//         await updateQustion(item)
//         dispatch(updateQuestion(item))
//     }
    

//     return (
//         <>
//             <h1>my history question</h1>
//             <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around'}}>
//             {question.question?.map(item =>
//                  <QuestionItem item={item} onDeleteQuestion={onDeleteQuestion} onEditQuestion={onEditQuestion} />)}
//             </div>
//         </>
//     )
// })
            }
