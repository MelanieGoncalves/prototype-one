import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login() {
        let user = {
            firstname: "firstname",
            lastname: "lastname",
            email: "email"
        }
        let accounts = {
            facebook: false,
            twitter: false,
            linkedin: false,
            instagram: false
        }
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accounts', JSON.stringify(accounts));
        window.location = "/home";
    }
    render() {
        return (
            <div>
                <Card style={{
                    width: "50%",
                    margin: "20px auto 0 auto",
                    backgroundColor: "gray"

                }}>

                    <Card.Title>LOG IN</Card.Title>
                    <Card.Body>
                        <Form>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>


                            <Button variant="primary" type="submit" onClick={this.login} href="/home">
                                LOG IN
  </Button>

                        </Form>

                    </Card.Body>
                    <Card.Link style={{ color: 'white' }} href="/register">Not Registered?</Card.Link>

                </Card>
            </div>
        )
    }
}

export default Login;