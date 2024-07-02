import React from "react";
import logo from "../logo.svg";
import "../css/Pages.css";

function Home() {
  return (
    <div className="home-bg flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">This is Home</h2>
      <div class="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg">
  <p>Home Block</p>
</div>
      <p className="mt-4 text-lg">
        Home is a simple
      </p>
    </div>
  );
}

export default Home;

