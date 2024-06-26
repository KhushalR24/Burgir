import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Components/Header';

function ContactUs() {
  return (
    <>
    <Header/>
    <div id="contact">
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius luctus neque
              magna
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 7600-180-233
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
    </>
  );
}

export default ContactUs;
