import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditTask from '../modals/EditTask';
import ButtonDone from './Button/ButtonDone';
// import ButtonDelete from './Button/ButtonDelete';
// import ButtonEdit from './Button/ButtonEdit';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
        alert("Your Task is Deleted")
    }

    return (
        <div>
            <div className='row mt-3'>
                <div className='col mb-3'>
                    <div className="card todolist-content p-3">
                        <h5 className="card-title mb-3">{taskObj.Name}</h5>
                        <p className="card-text">{taskObj.Description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <ButtonDone />
                            <Button variant="warning" onClick={() => setModal(true)} >
                                Edit
                            </Button>
                            <Button variant="danger" onClick={handleDelete} >
                                Delete
                            </Button>
                            {/* <ButtonEdit />
                            <ButtonDelete /> */}
                        </div>
                    </div>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    )
}

export default Card;