import React from "react";
import logo from "../logo.svg";
import "../css/Pages.css";

function Contact() {
  return (
    <div className="contact-bg flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">This is Contact</h2>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg"
      >
        <div>
          <p>Contact</p>
        </div>
      </a>
      <p className="mt-4 text-lg">Click block to open youtube in new tab</p>
    </div>
  );
}

export default Contact;
