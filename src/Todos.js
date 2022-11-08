import React, { useState } from "react";
const Todos = () => {
  const user = JSON.parse(localStorage.getItem("todos"));
const [hide ,setHide]=useState(true)
const [array,setArray]=useState(user)
const [sortBy,setSortBy ]=useState('')


  const sort = () => {
    const arr = [...user]
      arr.sort((x, y) => {
        if (x[sortBy] > y[sortBy]) {
          return hide ? 1 : -1
        } else if (x[sortBy] < y[sortBy]) {
          return hide ? -1 : 1
        }
        return 0
      })
      return  setArray(arr)
  }


  
  return <div>
 <table style={{border:'1px solid black',textAlign:'center'}}>
      <thead style={{textAlign:'center'}} >
      {<tr>
         
       <th
      
        style={{border:'1px solid black',
          backgroundColor: '#eaeaea',
          cursor: 'pointer',
        }} >userId</th>
         <th
       onClick={()=>{
      
        setSortBy('id')
        sort()
        setHide(!hide)
       }}
        style={{border:'1px solid black',
          backgroundColor: '#eaeaea',
          cursor: 'pointer',
        }} >id</th>
         <th
         
       onClick={()=>{
        setSortBy('title')
        sort()
        setHide(!hide)
       }}
        style={{border:'1px solid black',
          backgroundColor: '#eaeaea',
          cursor: 'pointer',
        }} >title</th>
         <th
       onClick={()=>{
        setSortBy('completed')
        sort()
        setHide(!hide)
       }}
        style={{border:'1px solid black',
          backgroundColor: '#eaeaea',
          cursor: 'pointer',
        }} >completed</th>
         
        </tr>}
      </thead>
      <tbody >
        {array.map((item, idx) => <tr key={idx}>
          {Object.values(item).map((item2, idx2) =>
          typeof item2 ==='boolean' ?<input type='checkbox' checked={item2} />: <td style={{border:'1px solid black'}} key={idx2}>{item2}</td>
          )}
        </tr>)}
      </tbody>
    </table>

  </div>;
};

export default Todos;
