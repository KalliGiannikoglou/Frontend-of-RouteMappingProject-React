import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar style={{backgroundColor: '#7AA5F0',color: '#000000' }} expand="lg">
        <Container>
          <Navbar.Brand href="/home" style={{ color: 'white' }}>Route Mapping App</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default Header;