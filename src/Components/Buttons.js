import React from 'react'
import "./Buttons.css"
const Buttons = ({title,btn}) => {
    return (
      <>
       {btn === "primary" ? <button className="primary">{title}</button> : null}
       {btn === "secandory" ? <button className="secandory">{title}</button> : null}
      </>
    )
}

export default Buttons
