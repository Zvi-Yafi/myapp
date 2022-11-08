import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));
 
  return (
    <>
     <h1
        style={{
          width: "100%",
          backgroundColor: "lightblue",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        {user?`welcome:${user.username}`:'!אנא הרשם וזריז'}
         <button
          className="btn"
          style={{ float: "left" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </h1>
    
      
        
      <div style={{ background: "lightgray", textAlign: "center" }}>
        {/* <NavLink
        to={"users"}
        style={({isActive})=> {
          return{ textDecoration:'none',
          color:isActive ?'red':'blue',
          padding: "20px",
          fontSize: "30px",}
        }}
      >
        component Users
      </NavLink>
      <NavLink
        to={"about"}
        style={({isActive})=> {
          return{ textDecoration:'none',
          color:isActive ?'red':'blue',
          padding: "20px",
          fontSize: "30px",}
        }}
      >
        go to about
      </NavLink>
      <NavLink
        to={"data"}
        style={({isActive})=> {
          return{ textDecoration:'none',
          color:isActive ?'red':'blue',
          padding: "20px",
          fontSize: "30px",}
        }}
      >
        go to data
      </NavLink> */}
      </div>
      <Outlet />
     
    </>
  );
}

export default Home;
