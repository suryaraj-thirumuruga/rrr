import axios from 'axios'
import React, { useState } from 'react'
import { APIDATA } from './Api'

export default function Create() {
    const [Name,setName]=useState('')
    const [Pass,setPass]=useState('')

    function handle(e){
        e.preventDefault()

        if(Name==''||Pass==''){alert('Name Or Pass Error')   }

        else{
            console.log(Name,Pass);

            axios.post(APIDATA,{UserName:Name,UserPass:Pass})

            setName('')
            setPass('')
            
        }

    }
    

  return (
    <div>
        <h1>Crud1 Create Page</h1>

        <form onSubmit={handle}>
            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <input type="password"  value={Pass} onChange={(e)=>setPass(e.target.value)}/><br /><br />
            <input type="submit" />
        </form>

    </div>
  )
}
