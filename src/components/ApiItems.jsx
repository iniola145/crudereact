import React from 'react'

const ApiItems = ({tunde, deleteItem}) => {
  return (
    <div style={{backgroundColor: 'crimson', width: '280px', height: '350px', padding: '10px', overflow: 'auto'}}>
        <h1>{tunde.title}</h1>
        <p>{tunde.body}</p>
        <button onClick={() => deleteItem(tunde.id)}>delete</button>
    </div>
  )
}

export default ApiItems