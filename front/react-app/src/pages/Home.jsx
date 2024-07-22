import React from "react";
import logo from "../logo.svg";
import "../css/Pages.css";

function Home() {
  return (
    <div className="home-bg flex">
      <div className="non-card-container">
        <h2 className="non-card-title">Non-card Content Title</h2>
        <p className="non-card-content">This is some content inside the non-card content block.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Card Title</h1>
          <p className="card-content">This is some content inside the card.</p>
          <div className="parent-cardlink-container">
            <a
              href="https://example.com"
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
