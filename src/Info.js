import React from 'react'
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const userJson = JSON.parse(localStorage.getItem('user'))
    console.log(userJson);
    let navigate = useNavigate()
  return (
    <div>
        <h1 
        style={{
            textAlign:'center',
            color:'deepskyblue',
            border:'1px solid red'
            }}>User information</h1>
<h2>name user :{userJson.username} </h2> 
<h2>phone : {userJson.phone}</h2>
<h2>email : {userJson.email}</h2>
<h2>address :</h2>
    <h2>city: {userJson.address.city}</h2>
    <h2>street: {userJson.address.street}</h2>
    
        <button className="btn btn-info"
        onClick={()=>{
            navigate('data')
        }}
        >data</button>
    </div>
  )
}

export default Info