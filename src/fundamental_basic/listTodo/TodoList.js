import React from 'react'

export default function TodoList(props) {
  return (
    <div>
        <span>
            {props.data.map((data, i) => (
                <p key={i}>{Object.values(data)}</p>
            ))}
        </span>
        
    </div>
  )
}
