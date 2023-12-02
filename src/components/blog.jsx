import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GalateaBlog = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <article>
                        <h2>Discover the Artistry of Ghalia Neji</h2>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Ghalia Neji's Artwork"
                            className="img-fluid mb-4"
                        />
                        <p>
                            Welcome to Galatea, where creativity knows no bounds. In the heart
                            of our collection lies the unique talent of Ghalia Neji, a young
                            artist whose work transcends conventional boundaries.
                        </p>
                        <p>
                            Ghalia specializes in crafting artisanal treasures that add a
                            touch of elegance and playfulness to your life. From intricate
                            prints to bespoke tic-tac-toe boards, charming pouches, and
                            mesmerizing aquarel monochrome paintings each piece is a testament
                            to her creativity and dedication.
                        </p>
                        <p>
                            Join us on a journey through Ghalia's artistry as we explore the
                            stories behind each creation, the inspiration that fuels her
                            passion, and the craftsmanship that sets Galatea apart.
                        </p>
                        <h2>Discover Ghalia's Artistic Journey</h2>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Ghalia Neji's Artwork"
                            className="img-fluid mb-4"
                        />
                        <p>
                            Embark on a visual odyssey through the artistic realm of Ghalia Neji at Galatea. Here, we delve into the evolution of her craft, witnessing the fusion of passion and creativity that defines her unique journey.

                        </p>
                        <p>
                            Ghalia's artistic narrative unfolds through a diverse range of expressions. From the early strokes that marked her beginnings to the avant-garde pieces that push the boundaries of conventional art, each creation reflects a chapter in her artistic exploration.

                        </p>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Ghalia Neji's Studio"
                            className="img-fluid mb-4"
                        />
                        <p>
                            Ghalia's studio is a haven of inspiration, filled with the aroma
                            of fresh paint and the soft hum of creativity. It's here that her
                            ideas come to life, evolving from a mere concept to a tangible
                            masterpiece.
                        </p>
                        <p>
                            As you explore our gallery, you'll find the story behind each
                            stroke of the brush, the precision in every stitch, and the
                            thoughtful design in every creation. It's not just art; it's a
                            journey captured on canvas, a game waiting to be played, and a
                            pouch that carries a piece of Ghalia's soul.
                        </p>
                    </article>
                </Col>
                <Col md={4}>
                    <aside>
                        <section>
                            <h4>Featured Products</h4>
                            <img
                                src="/img/main_layout_div3_pic1.jpg"
                                alt="Featured Product 1"
                                className="img-fluid mb-2" style={{ width: '200px', height: '150px' }}
                            />
                            <p>Prints Collection</p>
                            <img
                                src="/img/main_layout_div3_pic4.jpg"
                                alt="Featured Product 2"
                                className="img-fluid mb-2" style={{ width: '200px', height: '150px' }}
                            />
                            <p>Tic-Tac-Toe Boards</p>
                            <img
                                src="/img/main_layout_div1_pic1.jpg"
                                alt="Featured Product 3"
                                className="img-fluid mb-2" style={{ width: '200px', height: '150px' }}
                            />
                            <p>Aquarel Monochrome Paintings</p>
                            <img
                                src="/img/main_layout_div3_pic3.jpg"
                                alt="Featured Product 4"
                                className="img-fluid mb-2" style={{ width: '200px', height: '150px' }}
                            />
                            <p>Charming Pouches</p>
                        </section>
                    </aside>
                </Col>
            </Row>

            <div style={{ width: '100%' }}>
                <h2 style={{ textAlign: 'center' }}>Where the Magic Happens</h2>
                <iframe
                title="location"
                    width="100%"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24%20rue%20de%20la%20buanderie,%20Brussels&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>


            </div>


        </Container>
    );
};

export default GalateaBlog;