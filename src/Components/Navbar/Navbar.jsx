import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar" style={{
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor:"cyan",
     fontSize:"35px",
    }}>
      <Link className="navbarHome" to={"/"}>
        Home
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        Login/Sign Up
      </Link>
    </div>
  );
};
