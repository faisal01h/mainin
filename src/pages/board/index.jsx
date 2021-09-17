import React from "react";
import "./board.scss";

const Board = () => {
  return (
    <div className="board-container">
      <h1>Board</h1>

      <div className="map">
        <div className="map-top">
          <p>Pinjaman Online</p>
          <p>Magang</p>
          <p>Musibah</p>
          <p>Crypto</p>
          <p>Pers</p>
        </div>

        <div className="map-mid">
          <div className="mid-l">
            <p>Perkebunan Peternakan</p>
            <p>Saham</p>
            <p>News</p>
          </div>
          <div className="mid-c">
            <p>Berita</p>
          </div>
          <div className="mid-r">
            <p>News</p>
            <p>Berkah</p>
            <p>Magang</p>
          </div>
        </div>

        <div className="map-bottom">
          <p>Pers</p>
          <p>Pengadilan</p>
          <p>Pemilu</p>
          <p>Pasar</p>
          <p>Terminal</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
