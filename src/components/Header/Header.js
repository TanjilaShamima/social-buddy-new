import React from 'react';
import { Form, FormControl, Nav, Navbar, Button, Container } from 'react-bootstrap';
import logo from '../../logo.png';

const Header = () => {
    return (
        <div style={{marginBottom : '90px'}}>
            
            <Navbar bg="warning" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img style={{width : '150px'}}  src={logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/post">Post</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            
            </Navbar>
        </div>
    );
};

export default Header;