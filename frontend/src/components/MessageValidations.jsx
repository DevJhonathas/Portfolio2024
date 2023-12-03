import "./MessageValidations.css";

import React from 'react'

const MessageValidations = ({msg, type}) => {
  return (
    <div className={`message ${type}`}>
        <p>{msg}</p>
    </div>
  )
}

export default MessageValidations