import React, { Component, Fragment } from 'react';
//import { Navbar, Nav, NavItem, Collapse, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch, Route,
    NavLink as RRNavLink,
    Link
} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    Container,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarToggler,
    NavbarBrand
} from "reactstrap";
import About from "./About"
import Landing from "./Landing";
import Home from './Home';
import Register from './Register';
import Login from './Login'



class TopNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            user: null
        }
    }

    componentDidMount() {
        this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accounts");
        document.location.href = "/";
    }

    render() {

        const LOGGEDIN = (
            <Fragment>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret></DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/home">HOME</DropdownItem>
                        <DropdownItem onClick={this.logout}>LOG OUT</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
        )

        const LOGGEDOUT = (
            <Fragment>


                <NavItem >
                    <NavLink tag={RRNavLink} exact to="/about">ABOUT</NavLink>
                </NavItem>
            </Fragment>
        )
        return (
            <div style={{ height: "100%" }}>
                <Router>
                    <Navbar sticky="top" color="dark" dark expand="sm">
                        <Container>
                            <NavbarBrand href="/">
                                <img alt="logo" src={require('../images/logo.png')} style={{
                                    width: "30px",
                                    height: "30px",
                                    className: "d-inlines-block align-top"
                                }} />{'  '}
                            </NavbarBrand>
                            <NavItem >
                                <NavLink tag={RRNavLink} exact to="/">PROTOTYPE.ONE</NavLink>
                            </NavItem>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse className="bg-dark" isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto">
                                    {this.state.user ? LOGGEDIN : LOGGEDOUT}
                                </Nav>
                            </Collapse>
                        </Container>



                    </Navbar>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Landing />
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default TopNavBar;