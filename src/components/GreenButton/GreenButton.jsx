import React from 'react'
import style from './GreenButton.module.scss'

const GreenButton = ({text, click}) => {
  return (
  <button className={style.button} onClick={click}>{text}</button>
  )
}

export default GreenButton;