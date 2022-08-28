import React, { useState } from 'react'

export default function CreateList (props) {
    // State
    const [getCreateList, setCreateList] = useState('')
    
    // Event Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const newList = {
            name: getCreateList
        }

        // Debuging Content
        props.createList(newList)
        console.log(newList);
        setCreateList("")
    }

    // New Input Content
        const NewInput = (event) => {
        setCreateList(event.target.value)
        console.log(getCreateList);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={getCreateList} onChange={NewInput}/>
        <button type='submit'> Add </button>
    </form>
  )
}
