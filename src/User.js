import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const param = useParams()
console.log(param);
  return (
    <h1>user{param.userId}</h1>
  )
}

export default User