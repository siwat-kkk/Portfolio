import React from "react";
import { NavLink } from "react-router-dom";
import About from "../../pages/About";
import Nav from "./Nav";

const Navbar = () => {
  return (
    // <header className="bg-indigo-300 p-4 my-2 mx-1 rounded-md sticky top-0 items-center justify-between">
    //   <Nav/>
    // </header>
    <nav class="bg-indigo-300 p-4 my-2 mx-1 rounded-md sticky top-0 items-center justify-between">
      <ul class="flex">
        Nav-
        <li class="mr-6">
          <a class="text-black-500 hover:text-blue-800" href="#">
            Active
          </a>
        </li>
        <li class="mr-6">
          <a class="text-black-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-black-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
