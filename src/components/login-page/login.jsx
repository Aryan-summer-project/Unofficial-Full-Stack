import React from 'react'
import './login.css'

const login = () => {
    return(
        <div className='container'>
            <div className='header'>
                <div className="text">SIGNUP</div>
                <div className="underline"></div>
            </div>
          <div className="inputs">
            <div className="input">
                <img src="" alt=""/>
                <input type="text"/>
            </div>

            <div className="input">
                <img src="" alt=""/>
                <input type="email"/>
            </div>

            <div className="input">
                <img src="" alt=""/>
                <input type="password"/>
            </div>
          </div>
        </div>
    )
}

export default login