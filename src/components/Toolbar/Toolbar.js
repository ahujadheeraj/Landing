import React,{Component} from 'react'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

const toolbar = (props) => (
    <header className ="Toolbar">
        <Logo />
        <Navigation />
    </header>
)
       



export default toolbar;