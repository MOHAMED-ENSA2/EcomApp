import React from 'react'

import "./AcountIcon.css"

function AcountIcon() {
    return (
        <div className = "acount">
            <i className="acountIcon fas fa-user fa-lg"></i>     
            <ul>
                <li>Profile</li>
                <li>Sign In</li>
                <li>Sign up</li>
            </ul>       
        </div>
    )
}

export default AcountIcon
