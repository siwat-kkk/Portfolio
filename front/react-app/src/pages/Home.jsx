import React from "react";
import logo from "../logo.svg";
import "../css/Pages.css";

function Home() {
  return (
    <div className="home-bg flex flex-col items-center justify-center">
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Card Title</h1>
          <p className="card-content">This is some content inside the card.</p>
          <a href="https://example.com" className="card-link" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
      {/* <h2 className="text-2xl font-bold">This is Home</h2>
      <div className="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg">
        <p>Home Block</p>
      </div>
      <p className="mt-4 text-lg">Home is a simple</p> */}
    </div>
  );
}

export default Home;
