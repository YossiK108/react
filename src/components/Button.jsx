import React from 'react'


const Button = (props) => {
  return (
    <button style={{
      color: props.color,
      backgroundColor: 'salmon',
      padding: '2rem 4rem',
      margin: '3rem',
      borderRadius: 15
    }}>{props.label}</button>
  )
}

export default Button
