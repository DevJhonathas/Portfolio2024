import React from 'react'

// CSS
import "./Retangulo_msg.css";

// React Router Dom
import { NavLink } from 'react-router-dom';

const Rentagulo_msg = ({msg, type, button = true}) => {
    return (
        <div className={`component_text ${type}`}>
            <p>{msg}</p>
            <ul>
                <li className='ul_button'>
                    <NavLink to="/about" id='style_button' className={button ? 'button' : 'noButton'}>Sobre mim</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Rentagulo_msg
