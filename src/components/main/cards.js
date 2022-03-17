import React from 'react';
import {Row, Card,Col} from 'react-bootstrap';
import {data} from '../../data' 
function Cards() { 
  console.log(data);
  return (
    <div>
      
        <Row xs={1} md={2} className="g-4">
  {data.map((element, idx) => (
    <Col key={idx}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{`${element.name.split(' ')[0].charAt(0)}${element.name.split(' ')[1].charAt(0)}` }</Card.Title>
          <Card.Text>
            {element.company.name.charAt(0) }
            {element.company.bs }
            {element.company.catchPhrase}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default Cards