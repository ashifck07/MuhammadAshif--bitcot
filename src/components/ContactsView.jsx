
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosContact, IoMdCreate, IoMdTrash } from "react-icons/io";

const ContactsView = ({ contacts, onCardClick, onEditClick, onDeleteClick }) => {
  return (
    <Container className="mt-4 ms-0">
      <Row className="justify-content-center flex-column">
        {contacts.map((contact) => (
          <Col key={contact.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div onClick={() => onCardClick(contact)} style={{ cursor: 'pointer', flex: 1 }}>
                  <Card.Title className='d-flex gap-2 align-items-center'>
                    <IoIosContact className='fs-3' />
                    {contact.name}
                  </Card.Title>
                </div>
                <div>
                  <Button variant="outline-primary" size="sm" className="me-2" onClick={(e) => { e.stopPropagation(); onEditClick(contact); }}>
                    <IoMdCreate />
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={(e) => { e.stopPropagation(); onDeleteClick(contact); }}>
                    <IoMdTrash />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ContactsView;