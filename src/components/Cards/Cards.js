import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import data from '../../FakeData/FakeData';
import './Cards.css';

const Cards = () => {
  return (
    <div className="team" id="pricing">
      <Container className="text-center">
      <h3 className="m-5">Choose Your Dedicated Team</h3>
        <Row className="d-flex justify-content-center">
          {
            data.map(item =>
              <Col
              md={4}
              sm={6}
              xs={12}
              key={item.id}>
                <Card
                  className="text-center card-design mb-5 ml-auto"
                  style={{ width: '18rem' }}>
                <Card.Body>
                    <p className="price-tag"><b>${item.price}</b></p>
                    <p>{item.type}</p>
                    <hr className="hr-style" />
                    <p>{item.page}</p>
                    <p>{item.inner}</p>
                    <p>{item.file}</p>
                    <p>{item.source}</p>
                    <p>{item.photo}</p>
                    <p>{item.freeSupport}</p>
                    <p>{item.support}</p>
                    <button className="order-btn mx-auto">Order Now</button>
                </Card.Body>
              </Card>
  
            </Col>)
          }

        </Row>
      </Container>
      
    </div>
  );
};

export default Cards;