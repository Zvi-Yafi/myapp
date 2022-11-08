import React, { useState } from "react";
const Data = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={add}>
        add
      </button>
      <h3 style={{ fontFamily: "initial" }}>{count}</h3>
      <button className="btn btn-danger" onClick={minus}>
        minus
      </button>
    </div>
  );
};

export default Data;
