import axios from 'axios'
import React, { useState } from 'react'
import { api } from './Page1'

export default function Form() {
    const [Name,setname]=useState('')
    function handle(e){
        e.preventDefault()
        if(Name==''){
            alert('Name error')
        }
        else{
            axios.post(api,{user:Name})        
        }
        setname("") 
    }
  return (
    <div>

        <form onSubmit={handle}>
            <input type="text" onChange={(e)=>setname(e.target.value)} />
            <input type="submit" />
        </form>
        
    </div>
  )
}
