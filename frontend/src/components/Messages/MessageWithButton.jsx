import React from 'react'

// CSS
import "./MessageWithButton.css";

// React Router Dom
import { NavLink } from 'react-router-dom';

const Rentagulo_msg = ({msg, msg_button, msg_title, rota}) => {
    return (
        <div className="component_text">
            <h2>{msg_title}</h2>
            <p>{msg}</p>
            <ul>
                <li className='li_button'>
                    <NavLink to={rota} id='style_button' className="button">{msg_button}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Rentagulo_msg
