import React from 'react'
import './Logo.css'
import brandlogo from '../../assets/img/logo2.png'

const logo = (props) => (
    <div className = "Logo">
        <img src = {brandlogo} alt = "Opslyft" />
    </div>
)

export default logo

