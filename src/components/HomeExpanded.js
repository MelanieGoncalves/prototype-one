import React, { Component } from 'react';
import { Nav, Button, NavItem, NavLink, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Collapse, Card, CardBody } from 'reactstrap';
import AddAccounts from './AddAccounts';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addAccountShow: false,
            isOpen: false,
            user: null,
            accounts: {
                facebook: false,
                twitter: false,
                linkedin: false,
                instagram: false
            },
            buttonarray: [],
            friendsIsOpen: false,
            postsIsOpen: false,
            likesIsOpen: false,
            commentsIsOpen: false,
            sharesIsOpen: false
        }

    }

    async componentDidMount() {
        let u = await JSON.parse(localStorage.getItem("user"));
        let a = await JSON.parse(localStorage.getItem("accounts"));
        let b = await this.showButtons(a);
        await this.setState({
            user: u,
            accounts: a
        });
        await this.setState({ buttons: b });

    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleMenuFriends = () => {
        this.setState({
            friendsIsOpen: !this.state.friendsIsOpen
        });
    }

    toggleMenuPosts = () => {
        this.setState({
            postsIsOpen: !this.state.postsIsOpen
        });
    }

    toggleMenuLikes = () => {
        this.setState({
            likesIsOpen: !this.state.likesIsOpen
        });
    }

    toggleMenuComments = () => {
        this.setState({
            commentsIsOpen: !this.state.commentsIsOpen
        });
    }

    toggleMenuShares = () => {
        this.setState({
            sharesIsOpen: !this.state.sharesIsOpen
        });
    }

    showButtons(a) {
        let buttonarray = [];

        if (a.facebook === true) {
            buttonarray.push(
                <Nav.Link key="fb-a" style={{ width: "100%", padding: "0" }}><img src={require('../images/fblogo.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }
        else {
            buttonarray.push(
                <Nav.Link key="fb-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/fbgray.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }
        if (a.twitter === true) {
            buttonarray.push(
                <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/twitter.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }
        else {
            buttonarray.push(
                <Nav.Link key="tw-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/twittergray.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }

        if (a.linkedin === true) {
            buttonarray.push(
                <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/linkedin.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }
        else {
            buttonarray.push(
                <Nav.Link key="li-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/linkedingray.jpg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }

        if (a.instagram === true) {
            buttonarray.push(
                <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/insta.jpeg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }
        else {
            buttonarray.push(
                <Nav.Link key="ig-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/instagray.jpeg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
            )
        }


        return buttonarray;
    }

    expandMenu() {

    }



    render() {
        let addAccountClose = () => this.setState({ addAccountShow: false });
        return (
            <div style={{ display: "flex", height: "100%" }}>
                <Nav defaultActiveKey="/home" sticky="left" className="flex-column" variant="pills" style={{ width: "120px", height: "100%", backgroundColor: "darkblue" }}>

                    <div>{this.state.buttons}</div>

                </Nav>
                <div style={{ width: "15%", minWidth: "150px", backgroundColor: "gray" }}>
                    <Nav style={{ width: "100%", height: "100%" }}>
                        <NavItem style={{ width: "100%", height: "100%" }}>
                            <NavLink onClick={this.toggleMenuFriends} style={{
                                color: "white",
                                border: "1px solid white",
                                height: "8%",
                                fontSize: "120%",
                                borderRadius: "5px"
                            }}>FRIENDS</NavLink>
                            <Collapse isOpen={this.state.friendsIsOpen}>
                                <Card>
                                    <Button variant="outline-primary" >LAST POST</Button>
                                    <Button variant="outline-primary">LAST HOUR</Button>
                                    <Button variant="outline-primary">LAST DAY</Button>
                                    <Button variant="outline-primary">LAST WEEK</Button>
                                </Card>
                            </Collapse>
                            <NavLink onClick={this.toggleMenuPosts} style={{
                                color: "white",
                                border: "1px solid white",
                                height: "8%",
                                fontSize: "120%",
                                borderRadius: "5px"
                            }}>POSTS</NavLink>
                            <Collapse isOpen={this.state.postsIsOpen}>
                                <Card>
                                    <Button variant="outline-primary">LAST POST</Button>
                                    <Button variant="outline-primary">LAST HOUR</Button>
                                    <Button variant="outline-primary">LAST DAY</Button>
                                    <Button variant="outline-primary">LAST WEEK</Button>
                                </Card>
                            </Collapse>
                            <NavLink onClick={this.toggleMenuLikes} style={{
                                color: "white",
                                border: "1px solid white",
                                height: "8%",
                                fontSize: "120%",
                                borderRadius: "5px"
                            }}>LIKES</NavLink>
                            <Collapse isOpen={this.state.likesIsOpen}>
                                <Card>
                                    <Button variant="outline-primary">LAST POST</Button>
                                    <Button variant="outline-primary">LAST HOUR</Button>
                                    <Button variant="outline-primary">LAST DAY</Button>
                                    <Button variant="outline-primary">LAST WEEK</Button>
                                </Card>
                            </Collapse>
                            <NavLink onClick={this.toggleMenuComments} style={{
                                color: "white",
                                border: "1px solid white",
                                height: "8%",
                                fontSize: "120%",
                                borderRadius: "5px"
                            }}>COMMENTS</NavLink>
                            <Collapse isOpen={this.state.commentsIsOpen}>
                                <Card>
                                    <Button variant="outline-primary">LAST POST</Button>
                                    <Button variant="outline-primary">LAST HOUR</Button>
                                    <Button variant="outline-primary">LAST DAY</Button>
                                    <Button variant="outline-primary">LAST WEEK</Button>
                                </Card>
                            </Collapse>
                            <NavLink onClick={this.toggleMenuShares} style={{
                                color: "white",
                                border: "1px solid white",
                                height: "8%",
                                fontSize: "120%",
                                borderRadius: "5px"
                            }}>SHARES</NavLink>
                            <Collapse isOpen={this.state.sharesIsOpen}>
                                <Card>
                                    <Button variant="outline-primary">LAST POST</Button>
                                    <Button variant="outline-primary">LAST HOUR</Button>
                                    <Button variant="outline-primary">LAST DAY</Button>
                                    <Button variant="outline-primary">LAST WEEK</Button>
                                </Card>
                            </Collapse>
                        </NavItem>
                    </Nav>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                    <Button onClick={() => this.setState({ addAccountShow: true })} style={{

                        width: "40px"
                    }}><strong>+</strong></Button>
                    <AddAccounts
                        show={this.state.addAccountShow}
                        onHide={addAccountClose}
                        handler={this.handler} />
                </div>
            </div>
        )
    }
}

export default Home;