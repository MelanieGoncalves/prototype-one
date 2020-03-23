import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddAccounts extends Component {
    constructor(props) {
        super(props);
    }

    addFB() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: true,
            twitter: currentaccounts.twitter,
            linkedin: currentaccounts.linkedin,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        document.getElementById('fblabel').style.color = "black";
        document.getElementById('fblabel').style.backgroundColor = "yellow";
    }

    addTW() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: true,
            linkedin: currentaccounts.linkedin,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        document.getElementById('twlabel').style.color = "black";
        document.getElementById('twlabel').style.backgroundColor = "yellow";
    }

    addLI() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: currentaccounts.twitter,
            linkedin: true,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        document.getElementById('lilabel').style.color = "black";
        document.getElementById('lilabel').style.backgroundColor = "yellow";
    }

    addIG() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: currentaccounts.twitter,
            linkedin: currentaccounts.linkedin,
            instagram: true
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
        document.getElementById('iglabel').style.color = "black";
        document.getElementById('iglabel').style.backgroundColor = "yellow";
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            ADD ACCOUNTS
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <Form style={{ display: "flex" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={this.addFB} ><img src={require('../images/fblogo.jpg')} alt=" " style={{ height: "150px" }} /></Button>
                                <Form.Label style={{ color: "white" }} id="fblabel" >Facebook Added</Form.Label>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={this.addTW} ><img src={require('../images/twitter.jpg')} style={{ height: "150px" }} /></Button>
                                <Form.Label style={{ color: "white" }} id="twlabel" >Twitter Added</Form.Label>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={this.addLI} ><img src={require('../images/linkedin.jpg')} style={{ height: "150px" }} /></Button>
                                <Form.Label style={{ color: "white" }} id="lilabel" >LinkedIn Added</Form.Label>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Button style={{ backgroundColor: "transparent", border: "none" }} onClick={this.addIG} ><img src={require('../images/insta.jpeg')} alt=" " style={{ height: "150px" }} /></Button>
                                <Form.Label style={{ color: "white" }} id="iglabel" >Instagram Added</Form.Label>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { window.location = "/home" }}>DONE</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}

export default AddAccounts;