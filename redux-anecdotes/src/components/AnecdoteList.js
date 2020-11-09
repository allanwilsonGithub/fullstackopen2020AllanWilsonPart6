import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
      return (
        <div>
        <h2>Anecdotes</h2>
        {anecdotes.anecdotes.sort(function (a, b) {
          return b.votes - a.votes;
        })
        .map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
            </div>
            </div>
        )}
        </div>
    )
}

export default AnecdoteList