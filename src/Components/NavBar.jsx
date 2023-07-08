import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <header>
      <div style={{ textAlign: "center", fontSize: "3rem"  }}>TRAVL</div>
      <nav>
        <Nav
          justify
          variant="tabs"
          defaultActiveKey="/home"
          style={{ background: "lightgray", color: "black", padding: '1.2rem' }}
        >
          <Nav.Item>
            <Link to="/"> Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/products">Products</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/services"> Services</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="signUp"> Sign-up</Link>
          </Nav.Item>
        </Nav>
      </nav>
    </header>
  );
}

export default NavBar;
