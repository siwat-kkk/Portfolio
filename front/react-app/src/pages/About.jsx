import React from "react";
import logo from "../logo.svg";
import "../css/Pages.css";

function About() {
  return (
    <div className="about-bg flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">This is About</h2>
<a href="https://www.youtube.com/" class="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg">
      <div >
        <p>About Block</p>
      </div>
</a>      
      <p className="mt-4 text-lg">Click block to go to youtube</p>
    </div>
  )
}

export default About