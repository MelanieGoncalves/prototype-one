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
                    width: "65%",
                    margin: "50px auto",
                    backgroundColor: "#363537"

                }}>
                    <Card.Body>
                        <div style={{ display: "flex" }}>
                            <img alt="graph" src={require('../images/piegraph.jpg')} />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "auto"
                            }}>
                                <Button href="/register" style={{
                                    margin: "30px"
                                }}>REGISTER</Button>
                                <Button href="/login" style={{
                                    margin: "30px"
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