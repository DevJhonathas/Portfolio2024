import "./MessageText.css";

import React from 'react'

const Message = ({text_one, text_two, text_three}) => {
  return (
    <div className="messageText">
        <p>{text_one}</p>
        <p>{text_two}</p>
        <p>{text_three}</p>
    </div>
  )
}

export default Message