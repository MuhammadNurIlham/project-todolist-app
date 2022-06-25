import React from 'react';
import DeleteModal from './modal';
import EditModal from './buttonEdit';
import ButtonDone from './Button/ButtonDone';

function ExampleCrud() {
    return (
        <div className='examplecrud'>
            <div className='container'>
                <div className='row text-center mb-3'>
                    <div className='col mb-3'>
                        <h2>Create, Read, Update, Delete your schedule</h2>
                    </div>
                </div>
                <div className='row justify-content-start'>
                    <div className='col mb-3'>
                        <div className="card example-list p-3">
                            <h5 className="card-title mb-3">Meeting with CEO</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">June 20, 2022</h6> */}
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, tenetur. Necessitatibus, id alias quo consequuntur excepturi harum consectetur, earum corrupti nostrum cum rerum officiis? Expedita cupiditate in animi aliquam asperiores.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <EditModal />
                                <DeleteModal />
                                <ButtonDone />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EE6A5E" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,197.3C672,235,768,245,864,240C960,235,1056,213,1152,170.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default ExampleCrud;