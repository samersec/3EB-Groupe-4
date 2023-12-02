import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Row, Col, Button, Container } from 'react-bootstrap';
import { TiTick } from 'react-icons/ti';
import { IoIosArrowUp } from 'react-icons/io';
import { FaEnvelope, FaPhone, FaHome, FaShoppingBag, FaUser, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const CarouselComponent = () => {
    return (
        <div style={{ width: '1000px', margin: 'auto' }}>
            <Carousel style={{ marginTop: '15px', marginBottom: '20px' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/carousel1.jpg"
                        alt="First slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h1>Sketches</h1>
                        <Button variant="light">
                            EXPLORE
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/carousel2.jpg"
                        alt="Second slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <h1>Serie Graphies</h1>
                        <Button variant="light">
                            EXPLORE
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/carousel3.jpg"
                        alt="Third slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <h1>Story Bords</h1>
                        <Button variant="light">
                            EXPLORE
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

/******************************************************** */

export const MainLayout = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 style={{ paddingBottom: '30px', paddingTop: '30px' }}>DISCOVER ART YOU LOVE <br />FROM THE YOUNG ARTIST GALATEA </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src="img/main_layout_div1_pic1.jpg" alt="1" className="img-fluid" style={{ height: '350px', width: '500px' }} />
                    <h4>Pink Fish <br /> <small><u>Aquarelle monochrome series</u></small></h4>
                </div>
                <div className="col-md-4 text-center">
                    <img src="img/main_layout_div1_pic2.jpg" alt="2" className="img-fluid " style={{ height: '350px', width: '500px' }} />
                    <h4>Lugubre Sofa <br /> <small><u>Prints</u></small></h4>
                </div>
                <div className="col-md-4 text-center">
                    <img src="img/main_layout_div1_pic3.jpg" alt="3" className="img-fluid" style={{ height: '350px', width: '500px' }} />
                    <h4>Colorful Outfit <br /> <small><u>Stylish series</u></small></h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center border-top border-bottom my-4" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                        <h4>CATEGORIES</h4>
                        <div className="d-flex" style={{ marginRight: '100px' }}>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>PRINTS</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>TIC TAC TOE BORDS</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>POUCHES</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>AQUAREL MONOCHROME</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 style={{ paddingBottom: '30px', paddingTop: '30px' }}>2023 BEST SELLERS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic1.jpg" alt="1" className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <h4>Pink Lady <br /> <small style={{ fontSize: '15px' }}><u>Prints</u></small></h4>
                </div>
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic2.jpg" alt="2" className="img-fluid " style={{ height: '200px', width: '200px' }} />
                    <h4>Grey Outfit <br /> <small style={{ fontSize: '15px' }}><u>Stylish series</u></small></h4>
                </div>
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic3.jpg" alt="3" className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <h4>Heart Pouch <br /> <small style={{ fontSize: '15px' }}><u>Pouches</u></small></h4>
                </div>
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic4.jpg" alt="3" className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <h4>Blue Eyed bord <br /> <small style={{ fontSize: '15px' }}><u>Tic tac toe bord</u></small></h4>
                </div>
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic5.jpg" alt="3" className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <h4>Lone Wolf <br /> <small style={{ fontSize: '15px' }}><u>Prints</u></small></h4>
                </div>
                <div className="col-md-2 text-center">
                    <img src="img/main_layout_div3_pic6.jpg" alt="3" className="img-fluid" style={{ height: '200px', width: '200px' }} />
                    <h4>Headlss Yellow <br /> <small style={{ fontSize: '15px' }}><u>Prints</u></small></h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center border-top my-4" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                        <h4>SHOP BY BIDS</h4> <FontAwesomeIcon icon={faGavel} />
                        <div className="d-flex" style={{ marginRight: '100px' }}>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>PRINTS</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>TIC TAC TOE BORDS</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>POUCHES</button>
                            <button className="btn btn-outline-dark btn-lg mx-4" style={{ fontSize: '14px', width: '200px' }}>AQUAREL MONOCHROME</button>
                        </div>
                    </div>
                </div>
            </div>
            <Row >
                <Col md={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                style={{ height: '425px' }}
                                className="d-block w-100"
                                src="img/carousel_bid1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: '425px' }}
                                className="d-block w-100"
                                src="img/carousel_bid2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ height: '425px' }}
                                className="d-block w-100"
                                src="img/carousel_bid3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={4}>
                    <div>
                        <h2 className="text-center">Title</h2>
                        <p className="text-center" style={{ fontSize: '16px' }}>
                            In the enchanting realm of Galatea, our artist's website becomes a haven for true art enthusiasts seeking the extraordinary. Here, we curate a collection of exceptionally unique pieces, each a testament to the boundless creativity and innovation.Bidding on Galatea's art a passionate pursuit of the avant-garde, and an opportunity to bring home a piece of unparalleled artistry.
                        </p>
                    </div>
                    <div className="text-center">
                        <img
                            style={{ height: '120px', width: '150' }}
                            src="img/signature.png"
                            alt="Description"
                        />
                    </div>
                    <div className="text-center" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                        <Button className="btn-outline-dark" variant="light" href="#" block style={{ height: '45px', width: '200px' }}>
                            <Link to={`/Auctions/`} style={{ textDecoration: 'none', color: '#00BE85' }}> Learn more </Link>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Container style={{ backgroundColor: '#00BE85', color: 'white', paddingTop: '20px', paddingBottom: '20px', marginTop: '30px', marginBottom: '50px' }}>
                <Row>

                    <Col xs={4}>
                        <h5 style={{ textAlign: 'center' }}><TiTick />Global Selection</h5>
                    </Col>

                    <Col xs={4}>
                        <h5 style={{ textAlign: 'center' }}><TiTick />Satisfaction Guaranteed</h5>
                    </Col>

                    <Col xs={4}>
                        <h5 style={{ textAlign: 'center' }}><TiTick />Complimentary Art Advisory Services</h5>
                    </Col>
                </Row>

                <Row>

                    <Col xs={4}>
                        <p style={{ textAlign: 'center', fontSize: '14px' }}>Explore an unparalleled selection of paintings, photography, sculpture, and more by thousands of artists from around the world.</p>
                    </Col>

                    <Col xs={4}>
                        <p style={{ textAlign: 'center', fontSize: '14px' }}>Our 14-day satisfaction guarantee allows you to buy with confidence. If you're not satisfied with your purchase, return it and we'll help you find a work you love.</p>
                    </Col>

                    <Col xs={4}>
                        <p style={{ textAlign: 'center', fontSize: '14px' }}>Our personalized art advisory service gives you access to your own expert curator, free of charge.</p>
                    </Col>
                </Row>
            </Container>
            <div className="text-center mt-3 position-relative">
                <button className="back-to-top-btn" style={{ backgroundColor: 'white', border: '1px solid #000', borderRadius: '5%', padding: '10px', fontSize: '18px', cursor: 'pointer', zIndex: '2' }} onClick={scrollToTop}>
                    <IoIosArrowUp />
                    Back To Top
                </button>
            </div>
        </div>


    );
}
    ;

/********************************************************* */
export const Footer = () => {
    const linkStyle = { color: 'black' };

    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0', borderTop: '1px solid #ddd', marginTop: '20px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h4>Contact Us</h4>
                        <p><FaEnvelope /> <a href="mailto:info@example.com" style={linkStyle}>info@example.com</a></p>
                        <p><FaPhone /> <a href="tel:+11234567890" style={linkStyle}>+216 (216) 51 350 725</a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4>Quick Links</h4>
                        <p><FaHome /> <a href="#home" style={linkStyle}>Home</a></p>
                        <p><FaShoppingBag /> <a href="#products" style={linkStyle}>Products</a></p>
                        <p><FaUser /> <a href="#about" style={linkStyle}>About Us</a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h4>Follow Us</h4>
                        <p><FaFacebook /> <a href="#facebook" style={linkStyle}>Facebook</a></p>
                        <p><FaTwitter /> <a href="#twitter" style={linkStyle}>Twitter</a></p>
                        <p><FaInstagram /> <a href="#instagram" style={linkStyle}>Instagram</a></p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2023 GALATEA. All rights reserved.</p>
            </div>
        </footer>
    );
};

