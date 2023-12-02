import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';




import { db } from '../config/config';


import { getFirestore, collection, getDocs, doc, addDoc } from "firebase/firestore";

import { AuthDetails } from './Auth';

/************************************************************** */

export const HandleBidConfirm = async (productId, bidAmount, SignedIn, currentBid) => {

  const parsedbidAmount = parseFloat(bidAmount);

  if (bidAmount <= currentBid || bidAmount === '' || isNaN(bidAmount) || bidAmount <= 0) {
    alert('Bid must be higher than the current bid.');
  } else {
    try {
      const db = getFirestore();
      const documentRef = doc(db, 'ProduitEnchere', productId);
      const subCollectionRef = collection(documentRef, 'Bids');

      const newBidData = {
        BidValue: parsedbidAmount,
        Bidder: SignedIn.email,
      };

      await addDoc(subCollectionRef, newBidData);
      alert('Bid added successfully!');

      window.location.reload()
      console.log('Bid added successfully!');
    } catch (error) {
      console.error('Error adding bid:', error);
    }

  }

};

/************************************************************ */
export const AuctionedProducts = () => {
  /***************************************** */

  const { AuctionedproductId } = useParams();
  const [bids, setBids] = useState([]);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
/******************************************************* */

const [Products, setProducts] = useState([]);
  
  
useEffect (() => {
const getProducts = async () => {
 
    const data = await getDocs(collection(db, "ProduitEnchere"));
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log('appele');
  
};
getProducts();
},  []);


  /************************************************************* */



  const getBids = async (productId) => {
    const db = getFirestore();
    const documentRef = doc(db, 'ProduitEnchere', productId);
    const subCollectionRef = collection(documentRef, 'Bids');
    const querySnapshot = await getDocs(subCollectionRef);
    const bidData = querySnapshot.docs.map(doc => doc.data());
    setBids(bidData);
  };

  /****************************************************** */
  useEffect(() => {
    if (AuctionedproductId) {
      getBids(AuctionedproductId);
    }
  }, [AuctionedproductId]);

  /******************************************************** */

  const maxBid = Math.max(...bids.map(bid => bid.BidValue));
  const filteredBids = bids.filter(bid => bid.BidValue === maxBid);

  /***************************************** ****************/
  const handleBidClick = () => {
    if (!SignedIn) {
      alert('you must be signed in')
    }
    else
      setShowBidModal(true);
  };



  const handleBidCancel = () => {
    setShowBidModal(false);
  };
  const SignedIn = AuthDetails();

  return (

    <Container style={{ border: 'solid 1px', borderRadius: '5px', width: '1000px', padding: '20px' }}>
      <Row className="mt-5">

        {Products.map((Product) => {
          if (Product.id === AuctionedproductId) {
            return (
              <React.Fragment key={Product.id}>
                <Col md={4}>
                  <img
                    style={{
                      height: '300px',
                      width: '300px',
                      border: 'solid 1px',
                      borderRadius: '5px',
                    }}
                    src={Product.img}
                    alt="link icon"
                  />
                </Col>


                <Col md={8} >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Name: {Product.Nom}</h3>
                    <br />
                    <p>Auction ends on: {Product.AuctionEnd}</p>
                    <br />
                    <p>
                      Startingbid: <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{Product.StartingBid}$</span>
                      <br /></p>

                    {filteredBids.map((bid) => (

                      <p key={bid.id}>
                        Currentbid: <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}> {bid.BidValue}$</span>
                      </p>


                    ))}
                    <p>
                      description:
                      <p>
                        {Product.Description}
                      </p>
                    </p>
                    <div style={{ textAlign: 'right' }}>
                      <Button
                        className="shadow-sm rounded-pill"
                        variant="White" onClick={() => handleBidClick()}
                        style={{
                          position: 'relative',
                          bottom: '10px',
                          textAlign: 'center',
                          width: '40%',
                          transition: 'background-color 0.3s ease',
                          color: 'black',
                          backgroundColor: 'white', // Initial background color
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
                      >Bid Now
                      </Button>
                      <Modal show={showBidModal} onHide={handleBidCancel}>
                        <Modal.Header closeButton>
                          <Modal.Title>Place Your Bid</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>Enter the amount you want to bid:</p>
                          <input
                            type="number"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleBidCancel}>
                            Cancel
                          </Button>
                          <Button variant="primary" onClick={() => HandleBidConfirm(Product.id, bidAmount, SignedIn, maxBid)}>

                            Bid
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <br />
                      <Button
                        className="shadow-sm rounded-pill"
                        variant="white"
                        style={{
                          position: 'relative',
                          bottom: '10px',
                          textAlign: 'center',
                          width: '40%',
                          marginTop: '10px', 
                          transition: 'background-color 0.3s ease',
                          color: 'black',
                          backgroundColor: 'white',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
                      >
                        Watch
                      </Button>
                    </div>
                    <div style={{ backgroundColor: '#f2f2f2', borderRadius: '5px', marginTop: '10px' }}>
                      <div>
                        <span style={{ fontWeight: 'bold' }}>Breathe easy.</span> Returns accepted.
                      </div>
                      <div>
                        <span style={{ fontWeight: 'bold' }}>People want this.</span> 13 people are watching this.
                      </div>
                    </div>
                  </div>
                </Col>

              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
      </Row>
    </Container >
  );
};




export const SellableProducts = () => {
  /******************************** */
  const localStoragecart=JSON.parse(localStorage.getItem("cart"))
  const { productId, categorie } = useParams();

/*************************************************** */
  
  const [Products, setProducts] = useState([]);
  
  
  useEffect (() => {
  const getProducts = async () => {
   
      const data = await getDocs(collection(db, categorie));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('appele');
    
  };
  getProducts();
  },[]);

/******************************************************** */

  /******************************************* */
  let initialCartState = "";

  if (localStoragecart) {
    initialCartState = localStoragecart;
  }
 
  const [cart, addtocart] = useState(initialCartState);
  /********************************************** */

  const SetCart=(Product)=>{
  addtocart([...cart,Product]);
  console.log(Product.Nom)
  alert("Produit Added Successfully!");

  }
  
  useEffect (() => {
    localStorage.setItem('cart',JSON.stringify(cart));
     
    },  [cart]);
  
  /****************************** */
  return (

    <Container style={{ border: 'solid 1px', borderRadius: '5px', width: '1000px', padding: '20px' }}>
      <Row className="mt-5">
        {Products.map((Product) => {
          if (Product.id === productId) {
            return (
              <React.Fragment key={Product.id}>
                <Col md={4}>
                  <img
                    style={{
                      height: '300px',
                      width: '300px',
                      border: 'solid 1px',
                      borderRadius: '5px',
                    }}
                    src={Product.img}
                    alt="link icon"
                  />
                </Col>
                <Col md={8}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Name: {Product.Nom}</h3>
                    <br />
                    <p>Quantité: {Product.Quantité}</p>
                    <br />
                    <p>
                      Price: <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{Product.Prix}$</span>
                    </p>
                    <p>
                      description:
                      <p>
                        {Product.Description}
                      </p>
                    </p>
                    <div style={{ textAlign: 'right' }}>
                      <br />
                      <Button
                        variant="white"
                        className="shadow-sm rounded-pill"
                        style={{
                          position: 'relative',
                          bottom: '10px',
                          textAlign: 'center',
                          width: '40%',
                          transition: 'background-color 0.3s ease',
                          color: 'black',
                          backgroundColor: 'ddd1bc', // Initial background color
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = 'ddd1bc')}
                        onClick={()=>SetCart(Product)}
                      >
                        <i className="fas fa-cart-plus"></i> Add To Cart
                      </Button>                    </div>
                    <div style={{ backgroundColor: '#f2f2f2', borderRadius: '5px', marginTop: '10px' }}>
                      <div><span style={{ fontWeight: 'bold' }}>Breathe easy.</span> Returns accepted.</div>
                      <div><span style={{ fontWeight: 'bold' }}>People want this.</span> 13 people are watching this.</div>
                    </div>
                  </div>
                </Col>
              </React.Fragment>
            );
          }

          else
            return null;



        })}
      </Row>
    </Container>


  );
};

