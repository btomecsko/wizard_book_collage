import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"

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
          Conjure a Book
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #d3a625;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;