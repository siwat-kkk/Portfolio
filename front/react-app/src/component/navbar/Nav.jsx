import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/hompage">Homepage</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

const Nav = () => {
  return(
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks></NavLinks>
      </div>
    </nav>
  )

}

export default Nav;