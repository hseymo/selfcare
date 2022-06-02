import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export default function Fitness() {
    return (
        <div>
            <h1>Fitness Page</h1>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Monday</Card.Title>
    <Card.Text>
      Today i completed 45 minutes of exercise.
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Tuesday</Card.Title>
    <Card.Text>
      30 minutes of squats today!
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Wednesday</Card.Title>
    <Card.Text>
      Walked for 15 minutes in the morning
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Thursday</Card.Title>
    <Card.Text>
      exercised my body by playing games
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Friday</Card.Title>
    <Card.Text>
      Danced for 3 hours at a dance party
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Saturday</Card.Title>
    <Card.Text>
      Yeehaw'd for 11 hours straight
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Sunday</Card.Title>
    <Card.Text>
      We do not exercise on the lords day
    </Card.Text>
    <Button variant="primary">Save Daily Changes</Button>
  </Card.Body>
</Card>
<h1>Your Goals</h1>
<Form>
  {[''].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`days ${type}`}
      />
      </div>
  ))}
      </Form>

      <Form>
  {[''].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`minutes ${type}`}
      />
      </div>
  ))}
      </Form>
       </div> 
    );
}
