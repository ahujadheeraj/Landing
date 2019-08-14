import React from 'react'
import './Demo.css'

const demo = (props) =>(
    <div className = "demo">
        <div className = "container">
            <div className = "left">
            <h1><p>See why the world’s best <br />companies use 
                Clearbit<br /> to become truly data-driven.</p></h1>
                <p>
                Integrating Clearbit was the biggest impact <br />investment of 
                anything we’ve done to date.
                </p>
            </div>
            <div className = "right">
                <div className = "shadow">
                <h2 style = {{textAlign:"center"}}>Get Started</h2>
                <form>
                    <ul>
                        <li>
                        <label forHtml = "Email">Email</label>
                        </li>
                        <li>
                        <input type = "text" id = "Email" placeholder = "you@Company-email.com"/> 
                        </li>
                        <li>
                        <label forHtml = "message">message</label>
                        </li>
                        <li>
                        <textarea id = "message" placeholder = "What are you hoping to accomplish?" />  
                        </li>
                        <li></li>
                        <li>
                            <button>Request a Demo</button>
                        </li>
                    </ul>
                    

                </form>
                </div>


            </div>

        </div>
    </div>
)

export default demo;