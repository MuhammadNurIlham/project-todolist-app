import React from 'react';
import todo from '../components/assets/todo.jpg';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <img src={todo} alt="todo"></img>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    )
}

export default Jumbotron;