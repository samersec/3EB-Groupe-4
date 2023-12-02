import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Form, Button, ModalFooter } from 'react-bootstrap';
import { FaUser, FaSignInAlt, FaCartPlus,FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "../config/config";
import { AuthDetails } from './Auth';

export const SignUpModal = ({ showModal, handleClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);

            }).catch((error) => {

                // Add your sign-up logic here
                console.log(error);

            });    // Close the modal after sign-up
        handleClose();
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSignUp}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            pattern=".{6,}"
                            title="Password must be at least 6 characters long."
                            required />
                    </Form.Group>
                    <ModalFooter>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal.Body>


        </Modal>
    );
};
export const SignInModal = ({ showModal, handleClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);

            }).catch((error) => {

                // Add your sign-up logic here
                console.log(error);

            });    // Close the modal after sign-up
        handleClose();
    };

    

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSignIn}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </Form.Group>
                    <ModalFooter>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal.Body>


        </Modal>
    );
};
export const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        console.log('User signed out!');
        
      })
      .catch((error) => {
        // Handle sign-out error
        console.error('Sign-out failed:', error);
      });
  };
export const NavBar = () => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const handleShowSignUp = () => setShowSignUpModal(true);
    const handleCloseSignUp = () => setShowSignUpModal(false);

    const handleShowSignIn = () => setShowSignInModal(true);
    const handleCloseSignIn = () => setShowSignInModal(false);

    const SignedIn = AuthDetails();



    return (
        <div>
            {/* First Navbar */}
            <Navbar bg="light" expand="lg" className="justify-content-end">
            <Navbar.Collapse className="justify-content-end">
                    <Nav style={{ marginRight: '30px' }}>


                        {SignedIn ? (
                            <>
                            <Nav.Link href="#" variant="primary">{`signed in as ${SignedIn.email}`}</Nav.Link>
                            <Nav.Link href="#" variant="primary" onClick={SignOut}><FaSignOutAlt />Sign Out</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#signup" variant="primary" onClick={handleShowSignUp}><FaUser /> Sign Up</Nav.Link>
                                <SignUpModal showModal={showSignUpModal} handleClose={handleCloseSignUp} />
                                <Nav.Link href="#login" onClick={handleShowSignIn}><FaSignInAlt /> Login</Nav.Link>
                                <SignInModal showModal={showSignInModal} handleClose={handleCloseSignIn} />
                            </>
                        )}

                        <Nav.Link href="#icon3"> <Link  to={`/cart/`}><FaCartPlus /> </Link></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Second Navbar */}
            <div style={{ borderBottom: '1px solid', borderTop: '1px solid ' }}>
                <Navbar bg="white" expand="lg">
                    <Container style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '185px' }}>
                        <Navbar.Brand href="#home">
                            <img
                                alt="Galatea Logo"
                                src="/img/logo.jpg"
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                            />{' '}

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >

                            <span><Link to={`/`} style={{ textDecoration: 'none', color: 'orange', fontSize: '26px' }}>GALATEA</Link></span>

                            <Nav className="mx-auto">
                            <Nav.Link href="#word3"><span style={{ fontWeight: 'bold' }}> <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Home</Link></span></Nav.Link>

                                <Nav.Link><span style={{ fontWeight: 'bold' }}>  <Link to={`/Catalogue/`} style={{ textDecoration: 'none', color: 'black' }}>Catalogue</Link> </span></Nav.Link>

                                <Nav.Link href="#word3"><span style={{ fontWeight: 'bold' }}> <Link to={`/Auctions/`} style={{ textDecoration: 'none', color: 'black' }}>Auctions</Link></span></Nav.Link>

                                <Nav.Link href="#word3"><span style={{ fontWeight: 'bold' }}> <Link to={`/Blog/`} style={{ textDecoration: 'none', color: 'black' }}>Blog</Link></span></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                       
                    </Container>

                </Navbar>
            </div>
        </div>
    );
};


