import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <Link to="/" style={{ color: "white", margin: "10px" }}>
        Portfolio
      </Link>
    </nav>
  );
};

export default NavLinks;
