import React from 'react'
import classes from "./globalstyle.module.css"

const GlobalButton = (props) => {
  return (
        <button className=
        {`${classes.button} 
        ${classes[props.varient]}
         ${classes[props.outline]}`}
         >{props.children}</button>
  )
}

export default GlobalButton