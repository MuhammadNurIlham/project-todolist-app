import React from 'react';
import moment from 'moment';

function TitleContent() {
    state = {
        dateNow: moment().format('MMMM Do YYYY, h:mm:ss a'),
        currentTime: '14.47 AM'
    }

    const {dateNow, currentTime} = this.state;
    return (
        <div className='container'>
            <div className='row justify-content-start'>
                <div className='col-md-4 mb-3'>
                    <div className="card py-2 px-3">
                        <h5 className="card-title">Aku mau ngapain hari ini...??</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{dateNow}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{currentTime}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleContent;