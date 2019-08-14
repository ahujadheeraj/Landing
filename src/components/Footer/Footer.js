import React from 'react'
import './Footer.css'
import brandlogo from '../../assets/img/logo2.png'


const footer = (props) => (
    <div className = "Extra">
        <div className = "Footer">
                <div className  = "Solutions">
                    <ul>
                        <li><h3>SOLUTIONS</h3></li>
                        <li>Marketing</li>
                        <li>Sales</li>
                        <li>Developer</li>
                        <li>Batch</li>
                    </ul>

                </div>
                <div className = "Products">
                    <ul>
                        <li><h3>PRODUCTS</h3></li>                <li>Enrichment</li>
                        <li>Propector</li>
                        <li>Connect</li>
                        <li>Reveal</li>
                    </ul>

                </div>
                <div className = "Information">
                    <ul>
                        <li><h3>INFORMATION</h3></li>

                        <li>Pricing</li>
                        <li>Support</li>
                        <li>Documentation</li>
                        <li>Wiki</li>
                    </ul>

                </div>
                <div className = "Company">
                    <ul>
                        <li><h3>COMPANY</h3></li>

                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                    </ul>

                </div>
            </div>
            <hr/>
          <div className = "ops">
              <div><img src = {brandlogo} alt = "Opslyft" /></div>
            <div>2019 Opslyft</div>
          </div>

    </div>
    
)

export default footer;