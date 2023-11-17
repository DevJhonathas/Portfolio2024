import React from 'react'

// CSS
import "./Retangulo_msg.css";

// React Router Dom
import { NavLink } from 'react-router-dom';

const Rentagulo_msg = ({msg, type, button = true, msg_button, msg_title, rota}) => {
    return (
        <div className={`component_text ${type}`}>
            <h2 className={button ? 'button' : 'noButton'}>{msg_title}</h2>
            <p>{msg}</p>
            <ul>
                <li className='ul_button'>
                    <NavLink to={rota} id='style_button' className={button ? 'button' : 'noButton'}>{msg_button}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Rentagulo_msg
