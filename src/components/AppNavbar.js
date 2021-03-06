import React, {useContext} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

export default function AppNavbar() {
    const {user} = useContext(UserContext)

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Iskwela</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="courses" className="nav-link">Courses</NavLink>
                        {
                            (user.accessToken !== null) ?
                                <NavLink to="logout" className="nav-link">Logout</NavLink>
                            :
                                <>
                                    <NavLink to="register" className="nav-link">Register</NavLink>
                                    <NavLink to="login" className="nav-link">Login</NavLink>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}