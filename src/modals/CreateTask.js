import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({ modal, toggle, save }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === "taskName"){
            setTaskName(value)
        }else {
            setDescription(value)
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
        window.location.reload()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} >
                    Create Task
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
                    <Button variant="success" onClick={handleSave} >
                        Create
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTask;