import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Photos = () => {
  const [img, setImg] = useState(0);
  const { photoID } = useParams();

  const [photo, setPhoto] = useState(null);
  console.log(img);

  async function getPhoto() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${photoID}/photos`
    );
    const data = await res.json();
    setPhoto(data);
  }
  useEffect(() => {
    getPhoto();
  }, []);
  const dafdef = (num) => {
    if (img + num * 1 >= 0 && img + num * 1 <= 50) {
      setImg(img + num * 5);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dafdef(-1)}
        >
          {"הקודם"}
        </button>
        <span> </span>

        <button className="btn btn-outline-secondary" onClick={() => dafdef(1)}>
          {"הבא"}
        </button>
      </div>
      {!photo ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        photo.slice(img).map((item, idx) =>
          idx <= 10 ? (
            <Card
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "5px",
                textAlign: "center",
              }}
            >
              <Card.Img src={item.thumbnailUrl} />
            </Card>
          ) : null
        )
      )}
    </div>
  );
};

export default Photos;
