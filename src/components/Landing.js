import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Card style={{
                    width: "70%",
                    margin: "50px auto",
                    backgroundColor: "#363537",


                }}>
                    <Card.Body>
                        <div style={{ display: "flex", width: "100%", height: "100% " }}>
                            <div style={{ width: "40%", height: "100%", margin: "auto" }}>
                                <img style={{ width: "100%", height: "100%", border: "1px solid gray", borderRadius: "5px" }} alt="graph" src={require('../images/piegraph.jpg')} />
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "auto",
                                width: "60%"
                            }}>
                                <div>
                                    <p style={{ width: "100%", padding: "20px 20px 0 20px", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur.</p>
                                </div>
                                <Button href="/register" style={{
                                    margin: "30px auto",
                                    maxWidth: "300px"
                                }}>REGISTER</Button>
                                <Button href="/login" style={{
                                    margin: "30px auto",
                                    maxWidth: "300px"
                                }}>LOG IN</Button>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Landing;