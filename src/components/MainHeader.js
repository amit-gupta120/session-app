import React from 'react'
import '../styleSheets/Main.css'

const MainHeader = () => {
    return (
        <div className='header'>
            <div className='header_name'>
                <span className='welcome'>Welcome!</span>
                <br />
                <span className='name'>
                    Richard Potter
                </span>
            </div>
        </div>
    )
}

export default MainHeader