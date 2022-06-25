import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>please re-confirm what you want</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this schedule from your list?</Modal.Body>
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


export default DeleteModal;
