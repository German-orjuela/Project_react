import React,{useState} from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useUserState } from "../hooks/useUserState";
import UserSetStatus from "./UserSetStatus";
import UserContext from './UserContext';

const Menu = () => {
  const { setUser, siLogeado } = useUserState();
  const currentUser = siLogeado? setUser[0].currentUser : 'NO'
  console.log(siLogeado);
  console.log(siLogeado? setUser[0].currentUser : 'NO');

  const logOut = () => {
    UserSetStatus.logout();
  };

  return (
    <>
    <p>Si el usuario está logeado: {siLogeado && currentUser } </p>
    <Navbar bg="success" expand="lg" sticky="top">
      <Navbar.Brand text="red" href="/">
        VIVIR BIEN
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Salud</Nav.Link>
          <Nav.Link href="#link">Opiniones</Nav.Link>
          <NavDropdown title="Administrar" id="basic-nav-dropdown">
            {siLogeado && (
              <>
                <UserContext.Provider value={setUser}>
                  <NavDropdown.Item href="/GrupoFam">Tú familia</NavDropdown.Item>
                </UserContext.Provider>
                <NavDropdown.Item href="/ProgMenu">
                  Programa tú menú
                </NavDropdown.Item>
                <NavDropdown.Item href="/RevisaProg">
                  Consulta menú programado
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Usuario">
                  Separated link
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Nav>
        <Nav className="mr-right" text="light">
          {siLogeado ? (
            <>
              <Nav.Link href="/">Bien venido!</Nav.Link>
              <Nav.Link onClick={logOut}>Salir</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/loginUser">Ingresar</Nav.Link>
              <Nav.Link href="/register">Regístrate</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};
export default Menu;

//style={{ width: 400 }}
