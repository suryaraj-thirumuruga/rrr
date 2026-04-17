import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './Api'

export default function EditData() {
    const [Name,setName]=useState()
    const [Pass,setPass]=useState()
    const [id,setID]=useState(0)

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setPass(localStorage.getItem('Pass'))
    },[])

    function handle(e){
        e.preventDefault()

        if(Name==''||Pass==""){
            alert("Name And Pass Error")
        }
        else{
            console.log(Pass,Name);
            axios.post(api,{
                UserName:Name,
                UserPass:Pass
            })
            setName('')
            setPass('')            
        }
    }
  return (
    <div>
        <h1>Update DAta</h1>

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
