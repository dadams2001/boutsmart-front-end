import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <button>
        <Link className="link" to="/">
          Buy Merch
        </Link>
      </button>
      <button>
        <Link className="link" to="/Analytics">
          View Analytics
        </Link>
      </button>
      <button>
        <Link className="link" to="/AddItem">
          Add New Item 
        </Link>
      </button>
    </div>
  );
};

export default Header;
