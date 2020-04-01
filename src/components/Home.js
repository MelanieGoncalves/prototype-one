import React, { Component } from 'react';
import { Nav, Button, Dropdown } from 'react-bootstrap';
import { Tooltip } from 'reactstrap';
import AddAccounts from './AddAccounts';
import Background from '../images/bg.jpg';

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
            buttonarray: []
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

    showButtons(a) {
        let buttonarray = [];

        if (a.facebook === true) {
            buttonarray.push(
                <Nav.Link key="fb-a" onClick={this.expandMenu} style={{ width: "100%", padding: "0" }}><img src={require('../images/fblogo.jpg')} alt=" " style={{ padding: "0 0", width: "90px", border: "2px solid #4F600D" }} /></Nav.Link>
            )
        }
        else {
            /* buttonarray.push(
                <Nav.Link key="fb-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/fbgray.jpg')} alt=" " style={{ padding: "0 0", width: "96px", border: "2px solid gray" }} /></Nav.Link>
            ) */
        }
        if (a.twitter === true) {
            buttonarray.push(
                <Nav.Link onClick={this.expandMenu} style={{ width: "100%", padding: "0" }}><img src={require('../images/twitter.jpg')} alt=" " style={{ padding: "0 0", width: "90px", border: "2px solid #4F600D" }} /></Nav.Link>
            )
        }
        else {
            // buttonarray.push(
            //     <Nav.Link key="tw-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/twittergray.jpg')} alt=" " style={{ padding: "0 0", width: "96px", border: "2px solid gray" }} /></Nav.Link>
            // )
        }

        if (a.linkedin === true) {
            buttonarray.push(
                <Nav.Link onClick={this.expandMenu} style={{ width: "100%", padding: "0" }}><img src={require('../images/linkedin.jpg')} alt=" " style={{ padding: "0 0", width: "90px", border: "2px solid #4F600D" }} /></Nav.Link>
            )
        }
        else {
            /* buttonarray.push(
                <Nav.Link key="li-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/linkedingray.jpg')} alt=" " style={{ padding: "0 0", width: "96px", border: "2px solid gray" }} /></Nav.Link>
            ) */
        }

        if (a.instagram === true) {
            buttonarray.push(
                <Nav.Link onClick={this.expandMenu} style={{ width: "100%", padding: "0" }}><img src={require('../images/insta.jpeg')} alt=" " style={{ padding: "0 0", width: "90px", border: "2px solid #4F600D" }} /></Nav.Link>
            )
        }
        else {
            /*  buttonarray.push(
                 <Nav.Link key="ig-k" disabled style={{ width: "100%", padding: "0" }}><img src={require('../images/instagray.jpeg')} alt=" " style={{ padding: "0 0", width: "96px", border: "2px solid gray" }} /></Nav.Link>
             ) */
        }


        return buttonarray;
    }

    expandMenu() {
        window.location.href = './homeExpanded';
    }



    render() {
        let addAccountClose = () => this.setState({ addAccountShow: false });
        return (
            <div style={{
                display: "flex",
                height: "90%"
            }}>
                <Nav defaultActiveKey="/home" sticky="left" className="flex-column" variant="pills" style={{ width: "100px", height: "100%", backgroundColor: "#4F600D" }}>

                    <div>{this.state.buttons}</div>

                </Nav>
                <div style={{
                    padding: "20px", display: "flex", flexDirection: "column",
                    backgroundImage: "url(https://cdn.dribbble.com/users/45541/screenshots/5929137/attachments/1275287/matcha-sneak-dribbble.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "cover",
                    backgroundAttachment: "fixed",
                    backgroundSize: "100%",
                    backgroundBlendMode: "lighten",
                    overflow: "auto",
                    width: "100%"
                }}>
                    <div style={{ display: "flex" }}>
                        <h1 style={{ color: "black", fontFamily: "Calibri", textShadow: "2px 2px #b3ab12", float: "left" }}>WELCOME, FIRST-NAME</h1>

                    </div>
                    <Button variant="outline-dark" onClick={() => this.setState({ addAccountShow: true })} style={{
                        marginTop: "20px",
                        width: "80px",
                        height: "80px",
                        backgroundColor: "rgb(255,240,207)",
                        boxShadow: "8px 8px 50px #000",
                        borderWidth: "2px",
                        fontSize: "3em",
                        padding: "0",
                        textShadow: "2px 2px #b3ab12"
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