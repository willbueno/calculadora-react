import './Button.css'
import React from "react"

export default props => {
    return (
        <button className='button'>{props.label}</button>
    )
}