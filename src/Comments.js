import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Comments = () => {
  let { postID } = useParams();
  const navigate=useNavigate()
  const [data, setData] = useState(null);
console.log(data);
  async function getComemens() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
    );
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    getComemens();
  }, []);
  return (
    <div>
        {!data ? (
       <div className="text-center">
       <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
      ) : data.map((item, idx) =>
       (<Card
        style={
          { width: '20rem',
          height:'30rem',
          display:'inline-block',
          margin:'5px' 
          }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/cloud-sky-twilight-times_74190-4017.jpg?w=2000" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.body}
        </Card.Text>
        
      </Card.Body>
    </Card>))}
    
    </div>
  );
};

export default Comments;
