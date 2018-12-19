import React from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Example extends React.Component {
 
  render() {
    return (
      <div>
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Jon Sundra</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Bio
    </NavItem>
    <NavItem eventKey={2} href="#">
      Contact
    </NavItem>
   
  </Nav>
</Navbar>
      </div>
    );
  }
}
