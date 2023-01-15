import React from 'react'

const SessionModal = () => {
    return (
        <div>
            <div className='modal'>
                <div className='modal_content'>
                    <div className='modal_header'>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </div>
                        <div style={{ display: 'inline-block' }}>Reschedule Session</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionModal