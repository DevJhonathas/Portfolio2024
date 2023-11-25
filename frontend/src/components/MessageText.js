import "./MessageText.css";
import React from 'react'

const Message = ({text_one, text_two, text_three, type}) => {
  return (
    <div className={`messageText ${type}`}>
        <p>{text_one}</p>
        <p className={type ? "no_extra_text" : "extra_text"}>{text_two}</p>
        <p className={type ? "no_extra_text" : "extra_text"}>{text_three}</p>
    </div>
  )
}

export default Message