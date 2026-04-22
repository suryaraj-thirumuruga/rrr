import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIDATA } from './Api'
import { useNavigate } from 'react-router-dom'

export default function Read() {
    const [Getdata,setGetData]=useState([])

useEffect(()=>{
        axios.get(APIDATA).then((item)=>{
        console.log(item.data);  
        setGetData(item.data)      
    })
},[])

// delete function

function del(id){
    axios.delete(`${APIDATA}/${id}`).then(()=>{
          axios.get(APIDATA).then((item)=>{
        console.log(item.data);  
        setGetData(item.data)      
    })
    })
}

const navi = useNavigate()
function EditData(a,b,c){
    navi('/edit')
    localStorage.setItem('id',a)
    localStorage.setItem('Name',b)
    localStorage.setItem('Pass',c)
}

  return (
    <div>

        <h1>Read datas</h1>

        <table border={'2px'}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Pass</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {Getdata.map((y)=>(
                <tr>
                    <td>{y.id}</td>
                    <td>{y.UserName}</td>
                    <td>{y.UserPass}</td>
                    <td><button onClick={()=>EditData(y.id,y.UserName,y.UserPass)}>Edit</button></td>
                    <td><button onClick={()=>del(y.id)}>Delete</button></td>
                </tr>
            ))}
        </table>

    </div>
  )
}

