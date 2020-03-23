import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
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



    render() {
        let addAccountClose = () => this.setState({ addAccountShow: false });
        return (
            <div style={{ display: "flex", height: "100%" }}>
                <Nav defaultActiveKey="/home" sticky="left" className="flex-column" variant="pills" style={{ width: "120px", height: "100%", backgroundColor: "darkblue" }}>

                    <div>{this.state.buttons}</div>

                </Nav>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                    <h2 style={{ color: "white" }}>Welcome, first-name</h2>
                    <Button onClick={() => this.setState({ addAccountShow: true })} style={{
                        marginTop: "20px",
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