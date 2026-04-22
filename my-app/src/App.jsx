// import React, { useReducer, useState } from 'react'
// import Page2 from './Pages/Page2'
// import { userdetails } from './Pages/Page1'
// import Form from './Pages/Form'

 

// export default function App() {

 

//   function myfun(state,action){
//     if(action.type=="incr"){
//       return {count:state.count+1}
//     }
//   }

//   const [state,dispatch]=useReducer(myfun,{count:0})

//   function handle(){
//     dispatch({type:"incr"})
//   }

//   return (
//     <div>
//       <Form/>
//       <h1>{state.count}</h1>
//       <button onClick={handle}>click me</button>
    
// <Page2 user={userdetails}/>

// <h1>Form Data</h1>


//     </div>
//   )
// }
import React from 'react'
import Create from './crud1/Create'
import Read from './crud1/Read'
import {  Route, Routes } from 'react-router-dom'
import EditData from './crud1/Edit'

export default function App() {
  return (
    <div>
      <center>
      
       <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/new' element={<Create/>}/>
        <Route path='/edit' element={<EditData/>}/>

       </Routes>
  
      </center>
      
    </div>
  )
}
