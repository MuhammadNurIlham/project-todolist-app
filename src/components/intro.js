import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import todo from '../components/assets/todo.jpg';
import { useNavigate } from 'react-router-dom';


function Intro() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/create-todolist')
    }


    return (
        <div className='intro text-center'>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className='left-title'>Team Workspaces<br></br>For Management</div>
                        <div className='left-text'>Collaborate, Manage Projects, and Reach New Productivity Peaks.<br></br>Explore real workflows that save you and your team time<br></br>Get it all done with INFOSAYA</div>
                        {/* <ClickButton /> */}
                        <div className='buttonManual' id='try'>
                            <button className="btn create-task mt-3 mb-3 fs-4 px-5 py-2" onClick={handleNavigate}>
                                Get Started
                            </button>
                        </div>
                        <div className='left-emoticon'>
                            TRUSTED BY YOURSELF<br></br>😊😊😁
                        </div>
                    </Col>
                    <Col>
                        <img className='img-fluid' src={todo} alt='todo'></img>
                    </Col>
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,85.3C672,64,768,64,864,90.7C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
};


export default Intro;