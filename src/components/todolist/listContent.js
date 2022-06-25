import React from 'react';
import DeleteModal from '../modal';
import EditModal from '../buttonEdit';
import ButtonDone from '../buttonDone';

function ListContent() {
    return (
        <div className='container mt-3'>
            <div className='row justify-content-start'>
                <div className='col mb-3'>
                    <div className="card p-3">
                        <h5 className="card-title">Meeting with CEO</h5>
                        <h6 className="card-subtitle mb-2 text-muted">June 20, 2022</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, tenetur. Necessitatibus, id alias quo consequuntur excepturi harum consectetur, earum corrupti nostrum cum rerum officiis? Expedita cupiditate in animi aliquam asperiores.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <ButtonDone/>
                            <EditModal />
                            <DeleteModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListContent;