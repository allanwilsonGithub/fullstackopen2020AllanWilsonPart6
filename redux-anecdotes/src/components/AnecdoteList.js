import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setVoteNotification,removeNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const handleVoteClick = (id, content) => {
      dispatch(addVote(id))
      dispatch(setVoteNotification(content))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
    }
      return (
        <div>
        {anecdotes.anecdotes.sort(function (a, b) {
          return b.votes - a.votes;
        })
        .filter(anecdote => anecdote.content.includes(anecdotes.filter.content))
        .map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                <pre>has {anecdote.votes} <button onClick={() => handleVoteClick(anecdote.id, anecdote.content)}>vote</button></pre><hr></hr>
            </div>
            </div>
        )}
        </div>
    )
}

export default AnecdoteList