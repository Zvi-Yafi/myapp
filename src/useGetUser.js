import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useGetUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  useEffect(() => {
    const user = localStorage.getItem("user");
    if(!user){
        navigate('/login')
        return
    }
    return user
  }, [url]);
  return <div></div>;
};
export default useGetUser;
