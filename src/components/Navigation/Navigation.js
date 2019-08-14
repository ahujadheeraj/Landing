import React from 'react'
import './Navigation.css'

const navigation = (props) => (
    <div className = "Navigation">
        <ul>
            <li>
                <a href = "/pricing">Pricing</a>
            </li>
            <li>
                <a href = "/resources">Resources</a>
            </li>
        </ul>
    </div>
)

export default navigation;

