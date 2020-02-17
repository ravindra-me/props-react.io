import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel} </p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyounce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="9454283276"
      email="b@beyonce.com"
    />
    <Card
      name="jack ryan"
      img="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Jack_Ryan.png/160px-Jack_Ryan.png"
      tel="9454283276"
      email="ravindrarajpoot9628172@gmail.com"
    />
    <input
      id="fname"
      placeholder="enter your first name"
      value="ravindra"
      type="text"
    />
  </div>,
  document.getElementById("root")
);
