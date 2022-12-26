import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col d-flex justify-content-around mt-5">
          Navbar
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
