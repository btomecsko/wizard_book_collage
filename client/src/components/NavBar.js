import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

const NavBar = ({ wizard, setWizard }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setWizard(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Library</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          Create New Book
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

export default NavBar;