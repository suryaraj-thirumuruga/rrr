import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './Api'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [Name,setName]=useState('')
    const [Pass,setPass]=useState('')
    const [id,setId]=useState(0)

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setPass(localStorage.getItem('Pass'))
    },[])

    const navi = useNavigate('')
    function handle(e){
        e.preventDefault()

        if(Name==''||Pass==""){
            alert("Name And Pass Error")        }
        else{
            console.log(Pass,Name);
            
            axios.put(`${api}/${id}`,{UserName:Name,UserPass:Pass})
            // axios.post(api,{
            //     UserName:Name,
            //     UserPass:Pass
            // })
            setName('')
            setPass('')  
            navi('/')
            localStorage.clear()          
        }
    }
  return (
    <div>
        <h1>Upadte DAta</h1>

        <form onSubmit={handle}>
            <input type="text"
            value={Name} 
            onChange={(e)=>setName(e.target.value)}/>

            <input type="password" 
            value={Pass}
            onChange={(e)=>setPass(e.target.value)} />

            <input type="submit"  />

        </form>
    </div>
  )
}
