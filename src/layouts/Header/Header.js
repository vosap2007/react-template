/* eslint-disable */
import React from 'react';
import Select from '../../components/Select/Select';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import {Wallet} from '../../components/Wallet/Wallets';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Wallet></Wallet>
          <Button variant="primary" className="mr-3">
            Connect to Wallet
          </Button>{' '}
          <ThemeButton></ThemeButton>
          <Select></Select>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
