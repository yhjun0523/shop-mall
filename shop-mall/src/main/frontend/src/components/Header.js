import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Header() {
  return (
    <div className="header">
      <header>
        <h1>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Board
          </Link>
        </h1>
      </header>
    </div>
  );
}

export default Header;
