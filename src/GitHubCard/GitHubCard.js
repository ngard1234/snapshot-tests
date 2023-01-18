import React from "react";
import Card from 'react-bootstrap/Card';
import AboutMe from './About_Me.jpeg';


function GitHubCard() {
  return (
    <div className ="card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={AboutMe.jpeg} />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          This is about me , myself and I.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default GitHubCard