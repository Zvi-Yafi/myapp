import React from "react";
import { gettodo } from "./GetUsers";
import { getpost } from "./GetUsers";

import { Outlet, useNavigate } from "react-router-dom";

const Deshbord = () => {
  const navigate = useNavigate();
  const remove = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div style={{
      textAlign:'center'
    }}>
      <button
        className="btn btn-info"
        onClick={() => {
          navigate("info");
        }}
      >
        info
      </button>{" "}
      <button
        className="btn btn-info"
        onClick={() => {
          const user = JSON.parse(localStorage.getItem("user"));
          const userid = user.id;
          gettodo(userid).then(t => 
          localStorage.setItem('todos',JSON.stringify(t)),
          navigate("Todos")
        )}}
      >
        Todos
      </button>{" "}
      <button className="btn btn-info"
       onClick={() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userid = user.id;
        getpost(userid).then(t => 
        localStorage.setItem('posts',JSON.stringify(t)),
        navigate("Posts")
      )}}
      >Posts</button>{" "}
      <button className="btn btn-info"
      onClick={()=>{
        navigate("Alboms")

      }}
      >Albums</button>{" "}
      <button
        className="btn btn-info"
        onClick={() => {
          remove();
        }}
      >
        Logout
      </button>
      <Outlet />
    </div>
  );
};

export default Deshbord;
