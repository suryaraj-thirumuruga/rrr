import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIDATA } from './Api'
import { useNavigate } from 'react-router-dom'

export default function EditData() {
    const [Name,setName]=useState('')
    const [Pass,setPass]=useState('')
    const [Id,setId]=useState(0)

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setPass(localStorage.getItem('Pass'))
    },[])


    const Navi = useNavigate()
    function handle(e){
        e.preventDefault()

        if(Name==''||Pass==''){alert('Name Or Pass Error')   }

        else{
            console.log(Name,Pass);

            axios.put(`${APIDATA}/${Id}`,{UserName:Name,UserPass:Pass})
            localStorage.clear()
            Navi('/')       

            setName('')
            setPass('')
            
        }

    }
    

  return (
    <div>
        <h1>Crud1 Update Page</h1>

        <form onSubmit={handle}>
            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
            <input type="password"  value={Pass} onChange={(e)=>setPass(e.target.value)}/><br /><br />
            <input type="submit"  value={'Update'}/>
        </form>

    </div>
  )
}
