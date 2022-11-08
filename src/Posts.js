import React, { useState } from "react";

const Posts = () => {
  const user = JSON.parse(localStorage.getItem("posts"));
  const [hide, setHide] = useState(false);
  console.log(hide);
  console.log(user);

  return (
    <div>
      {user.map((item, idx) => (
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                onClick={() => {
                  setHide(!hide);
                }}
              >
                {item.title}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className={hide ? "accordion-button collapsed" : "collapse"}
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
