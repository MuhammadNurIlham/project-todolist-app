import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ButtonDone() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                    Done
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to complete the task?</Modal.Title>
                </Modal.Header>
                <Modal.Body>if you select yes, it will be marked as completed and the task will be removed from the to-do list</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ButtonDone;