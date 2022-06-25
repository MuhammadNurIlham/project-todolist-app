import React from 'react';
import { useNavigate } from 'react-router-dom';

function ClickButton() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/create-todolist')
    }

    return (
        <div className='buttonManual'>
            <button className="btn create-task mt-3 mb-3 fs-4 px-5 py-2" onClick={handleNavigate}>
                Get Started
            </button>

            {/* <Button className='rounded-4 mt-1 mb-4 fs-5 started' variant="primary">Get Started</Button> */}
        </div>
    )
}

export default ClickButton;