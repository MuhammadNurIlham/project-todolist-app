import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import moment from 'moment';


const TodoList = () => {
    const dateTime = new Date()
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(taskList)
    }


    return (
        <div className='container'>
            <div className='row justify-content-start'>
                <div className='col-lg-6 mb-3'>
                    <div className="card todolist-title py-2 px-3 mt-1">
                        <h5 className="card-title mb-3">Aku mau ngapain hari ini...</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{moment(dateTime).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{dateNow}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{currentTime}</h6> */}
                    </div>
                </div>
            </div>
            <button className="btn btn-primary create-task mt-3 mb-3 fs-4 px-5 py-2" onClick={() => setModal(true)}>Create Task</button>
            <div className='row mt-3'>
                <div className='col mb-3'>
                    {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                </div>
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </div>
    )
}

export default TodoList;