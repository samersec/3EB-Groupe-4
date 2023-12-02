import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';


import { useState, useEffect, } from "react";
import { db } from '../config/config';
import { collection, getDocs } from "firebase/firestore";




export const Catalogue = ({ categorie, print }) => {

  /******************************** */
  const [Products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {

      const data = await getDocs(collection(db, categorie));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('appele');

    };
    getProducts();
  },[]);



  /******************************** */
  return (

    <div>
  <Container>
  <h3 style={{ marginTop: '20px' }}>{print}</h3>
    <hr />
    <Row>
      {Products.map((Product) => (
        <Col md={3} key={Product.id} >
          <Card
            style={{ marginBottom: '20px', transition: 'box-shadow 0.3s ease' }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <Card.Img variant="top" src={Product.img} alt="error" />
            <Card.Body>
              <Card.Title>{Product.Nom}</Card.Title>
              <Card.Text>
                <p>{Product.Prix}€</p>
              </Card.Text>
              <Card.Text>{Product.Description}</Card.Text>
              <div className="cart-btn">
                <Link to={`/buy/${Product.id}/${categorie}`}>
                  <Button
                    variant="white"
                    className="shadow-sm rounded-pill"
                    style={{
                      position: 'relative',
                      bottom: '10px',
                      textAlign: 'center',
                      width: '100%',
                      transition: 'background-color 0.3s ease',
                      color: 'black',
                      backgroundColor: 'white', // Initial background color
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
                  >
                    <i className="fas fa-cart-plus"></i> Buy Now
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <hr style={{ marginTop: '20px' }} />
    </Row>
  </Container>
</div>

  );
};




export const Auctions = () => {

  /******************************** */
  const [Products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {

      const data = await getDocs(collection(db, "ProduitEnchere"));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('appele');

    };
    getProducts();
  }, []);






  /******************************** */
  return (

    <div >

      <Container>
        <h1 className="text-center text-success my-5">AUCTIONS</h1>
        <Row>
          {Products.map((Product) => (
            <Col md={3} key={Product.id}>
              <Card  style={{ marginBottom: '20px', transition: 'box-shadow 0.3s ease' }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
                <Card.Img variant="top" src={Product.img} alt="error" />
                <Card.Body>
                  <Card.Title>{Product.Nom}</Card.Title>
                  <Card.Text>
                    <p>{Product.AuctionEnd}</p>
                    <p>{Product.StartingBid}€</p>
                    <p>{Product.CurrentBid}</p>
                  </Card.Text>
                  <Card.Text>{Product.Description}</Card.Text>
                  <Link to={`/bid/${Product.id}`}>
                  <Button
                    variant="white"
                    className="shadow-sm rounded-pill"
                    style={{
                      position: 'relative',
                      bottom: '10px',
                      textAlign: 'center',
                      width: '100%',
                      transition: 'background-color 0.3s ease',
                      color: 'black',
                      backgroundColor: 'white', // Initial background color
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
                  >
                    <i className="fas fa-cart-plus"></i> Bid
                 
                    </Button>
                  </Link>
                

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>



    </div>

  );
};
