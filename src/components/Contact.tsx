import { Button, Form } from "react-bootstrap";
import React from "react";

function ContactForm():JSX.Element {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="email" placeholder="Enter subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Textarea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}
export default function Contact(): JSX.Element {
  return (
    <>
      <div className="text-center">
        <h2>Get in touch</h2>
        <hr />
      </div>
      <ContactForm />
    </>

  );
}