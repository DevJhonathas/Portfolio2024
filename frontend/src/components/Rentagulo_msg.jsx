import React from 'react'

const Rentagulo_msg = ({msg, type}) => {
    return (
        <div className={`message ${type}`}>
            <p>{msg}</p>
        </div>
    )
}

export default Rentagulo_msg
