import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNewAnecdoteNotification,removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))

        dispatch(setNewAnecdoteNotification(content))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)

      }

    return (
    <div>
    <h2>Create new anecdote ...</h2>
    <form onSubmit={addNewAnecdote}>
        <div><input name="anecdote" /></div><br></br>
        <button type="submit">create</button>
    </form>
    </div>
    )
}

export default AnecdoteForm