import React from 'react'

export default function listTodo(props) {
  return (
    <div>
       <h1>tes</h1>
        <ul>
        {props.ListTodo.map((data, i) => (
                <p key={i}>{Object.values(data)}</p>
            ))}
        </ul>
    </div>
  )
}
