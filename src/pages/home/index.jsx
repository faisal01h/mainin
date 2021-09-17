import React, { useState } from "react";
import { useHistory } from "react-router";
import "./home.scss";

const Home = () => {
  const history = useHistory();
  const [menu, setMenu] = useState("");

  return (
    <div className="home-container">
      <h1>Home</h1>

      {menu === "join" ? (
        <div className="join-wrapper">
          <div className="joinRoomById">
            <label htmlFor="roomId">Room id</label>
            <input type="text" id="roomId" />
            <label htmlFor="pass">Room Password</label>
            <input type="password" />

            <p className="btn">Join Room</p>
          </div>
          <p className="btn" onClick={() => history.push("/loby")}>
            Join Random Room
          </p>
          <p className="btn" onClick={() => setMenu("")}>
            Back
          </p>
        </div>
      ) : (
        <div className="menu-wrapper">
          <p className="btn">Create Room</p>
          <p className="btn" onClick={() => setMenu("join")}>
            Join Room
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
