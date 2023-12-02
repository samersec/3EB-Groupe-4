import React, { useState } from 'react';
import './Style.css';
import { Container, Table, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { db } from "../config/config";
import {  collection, addDoc } from "firebase/firestore";
import { AuthDetails } from './Auth';

import emailjs from 'emailjs-com';

export const Cart = () => {

    const localStoragecart = JSON.parse(localStorage.getItem("cart"));
    const [cart, addtocart] = useState(localStoragecart);
    const [total, setTotal] = useState(0);
    const SignedIn = AuthDetails();

/************************************* */

    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(product => 
            product.id === productId ? { ...product, Quantité: newQuantity } : product
        );
        addtocart(updatedCart);
        calculateTotal(updatedCart);
/************************************* */
    };
    const emptycart = () => {
        localStorage.removeItem("cart");
    }
/************************************* */
    const calculateTotal = (cart) => {
        const newTotal = cart.reduce((acc, product) => acc + (product.Prix * product.Quantité), 0);
        setTotal(newTotal);
    };


    /*************************** **************************************************************/
   

    
        const sendEmail = async (SignedIn) => {
            try {
               
                
                const userId = 'mETuCSxQaTanKnfM7';
                const serviceId = 'service_akjtzei';
                const templateId = 'template_awdm5k9';
        
                emailjs.init(userId);
                const templateParams = {
                    to: SignedIn.email,
                    from: "Galatea",
                    subject: "Payment Success",
                    message: "Thank you for your order! Your payment was successful.",
                };
        
                await emailjs.send(serviceId, templateId, templateParams);
            } catch (error) {
                console.error("Error sending email:", error);
            }
          };
    
/************************************************************************************ */
    const placeOrder = async () => {
        if (!SignedIn) {
            alert('you must be signed in')
            return;
          }
        else if (!cart || cart.length === 0) {
          alert("Cart is empty. Cannot place an order.");
          return;
        }
        else if (total===0)
        {
           alert('your total is 0 you must buy at least one item ')
           return;
        }
        try {
          const orderData = {
            total: total,
            products: cart,
            client: SignedIn.email,
          };
    
           await addDoc(collection(db, 'Commandes'), orderData);
    
          alert("Order placed successfully ");
    
          localStorage.removeItem("cart");
          
          await sendEmail(SignedIn);

          window.location.reload();
        } catch (error) {
          console.error("Error placing order:", error);
        }
      };

      /************************************* */
    return (
        
        <Container className="small-container" style={{ margin: '80px auto' }}>
              
            {cart ? (<>
                {cart.map((Product) => (

                    <Table striped bordered style={{ width: '100%' }} key={Product.id}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantite</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="cart-info" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Image src={Product.img} alt="" style={{ width: '80px', height: '80px' }} />
                                        <div>
                                            <h8>{Product.Nom}</h8>
                                            <p>{Product.Prix}</p>
                                            <br />
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <InputGroup>
                                        <FormControl type="number" min={1} style={{ width: '30px', height: '30px', padding: '5px' }}
                                        value={Product.Quantité}
                                        onChange={(e) => updateQuantity(Product.id, e.target.value)}
                                        />
                                    </InputGroup>
                                </td>
                                <td style={{ textAlign: 'right' }}>{Product.Prix*Product.Quantité}</td>
                            </tr>
                        </tbody>
                    </Table>
                ))}</>) : (<> <p>Cart vide</p></>)}
            <div className="total-price" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Table borderless style={{ borderTop: '3px solid #ff523b', maxWidth: '460px' }}>
                    <tbody>
                        
                        <tr>
                            <td>Total</td>
                            <td style={{ textAlign: 'right' }}>${total}</td>
                        </tr>

                        <Button
                            variant="white"
                            className="shadow-sm rounded-pill"
                            style={{
                                position: 'relative',
                                bottom: '5px',
                                textAlign: 'center',
                                width: '30%%',
                                transition: 'background-color 0.3s ease',
                                color: 'black',
                                backgroundColor: '#ddd1bc', // Initial background color
                                marginLeft:'85px',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#ddd1bc')}
                            onClick={() => emptycart()}>
                            Remove
                        </Button>
                        <Button
                            variant="white"
                            className="shadow-sm rounded-pill"
                            style={{
                                position: 'relative',
                                bottom: '5px',
                                textAlign: 'center',
                                width: '40%',
                                transition: 'background-color 0.3s ease',
                                color: 'black',
                                backgroundColor: '#ddd1bc', // Initial background color
                                marginLeft:'70px',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa600')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#ddd1bc')}
                            onClick={placeOrder}>
                            CashOut
                        </Button>
                       

                    </tbody>
                </Table>

            </div>
        </Container>

    );
};
