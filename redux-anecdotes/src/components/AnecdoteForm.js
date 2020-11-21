import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {

    const addNewAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.addAnecdote(content)

        props.setNotification(`New anecdote added: '${content}'`, 5000)

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

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      notification: state.notification,
    }
  }

const mapDispatchToProps = {
    addAnecdote,
    setNotification,
}

const ConnectedAnecdoteForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm