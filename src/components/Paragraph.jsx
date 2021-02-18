import React from 'react'

const Paragraph = (props) => {
  return (
    <div style={{backgroundColor: 'salmon', borderRadius: 5, padding: 2 }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Paragraph
