import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addtoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addtoHandler} >
                <input
                    type='text'
                    
                    placeholder='Enter a todo.....'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
