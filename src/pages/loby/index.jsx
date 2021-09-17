import React from "react";
import { useHistory } from "react-router";
import "./loby.scss";

const Loby = () => {
  const history = useHistory();
  return (
    <div className="loby-container">
      <h1>Loby</h1>

      <div className="invite-link">
        <p className="link">Https://invite.link</p>
        <p className="btn">Copy Link</p>
      </div>

      <div className="player">
        <p className="pl">Budi</p>
        <p className="pl">Andi</p>
        <p className="pl">Putra</p>
        <p className="pl">Putri</p>
      </div>

      <p className="btn" onClick={() => history.push("/board")}>
        Start Game
      </p>
    </div>
  );
};

export default Loby;
