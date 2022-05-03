import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='ul-footer'>
            <ul>
                <li><a href="https://www.linkedin.com/in/michael-negrete-0a3938206/">Linkedin</a></li>
                <li><a href="https://github.com/MichaelNegrete16">Github</a></li>
            </ul>
        </div>
        <div className='copy-footer'>
            <p>Todos los derechos reservados <span>Copyright @2022</span> </p>
        </div>
    </div>
  )
}

export default Footer