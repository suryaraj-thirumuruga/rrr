import axios from 'axios'
import React, { useState } from 'react'
import { api } from './Api'

export default function Create() {
    const [Name,setName]=useState('')
    const [Pass,setPass]=useState('')
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
        <h1>Create DAta</h1>

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
