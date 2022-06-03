import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './Exercise.css'

export default function Fitness() {
    return (
        <Card className="fitness">
            <h1>Exercise</h1>
            <h2>Your Goals</h2>
            <Form>
                {[''].map((type) => (
                    <Card key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`days ${type}`}
                        />
                    </Card>
                ))}
            </Form>

            <Form>
                {[''].map((type) => (
                    <Card key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`minutes ${type}`}
                        />
                    </Card>
                ))}
            </Form>
            <br />
            <Form.Check className="fitnessDate" type="date"></Form.Check>
            <br />
            <Card className="fitnessWeek">
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Monday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button className="fitnessBtn" variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Tuesday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Wednesday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Thursday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Friday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Saturday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
                <br />
                <Card className="fitnessCards">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <h4>Sunday</h4>
                        <Card.Text>
                            <Form.Check className="fitnessInput" type="text"></Form.Check>
                        </Card.Text>
                        <Button variant="primary">Save Daily Changes</Button>
                    </Card.Body>
                </Card>
            </Card>
        </Card>
    );
}