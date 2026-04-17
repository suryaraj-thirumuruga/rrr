import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './Api'
import { Link, useNavigate } from 'react-router-dom'

export default function Read() {
    const [GetData, setGetData] = useState([])

    useEffect(() => {
        axios.get(api).then((item) => {
            setGetData(item.data)
        })
    }, [])

    function del(key1) {
        axios.delete(`${api}/${key1}`).then(()=>{
             axios.get(api).then((item) => {
            setGetData(item.data)
        })
        })
    }


    const Navi = useNavigate()
    function Edit(a,b,c){
        localStorage.setItem("id",a)
        localStorage.setItem("Name",b)
        localStorage.setItem("Pass",c) 
        Navi('/edit')
    }

    return (
        <div>
            <h1>Read Data</h1>


            {/* value ? true : false */}

            {GetData.length === 0 ? (
                <h1>No data found</h1>
            ) : (
                <table border={'2px'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PASS</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {GetData.map((y) => (
                            <tr >
                                <td>{y.id}</td>
                                <td>{y.UserName}</td>
                                <td>{y.UserPass}</td>
                                <td>
                                <button onClick={()=>Edit(y.id,y.UserName,y.UserPass)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => del(y.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
