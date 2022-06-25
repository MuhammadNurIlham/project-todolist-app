import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask({ modal, toggle, updateTask, taskObj }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Update Task
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                name="taskName"
                                value={taskName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                name="description"
                                value={description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={toggle} >
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleUpdate}>
                        Update
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask;