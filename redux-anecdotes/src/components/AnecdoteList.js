import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

    const handleVoteClick = (id, content) => {
      props.addVote(id)
      props.setNotification(`You voted for: '${content}'`, 5000)
    }
      return (
        <div>
        {props.anecdotes.sort(function (a, b) {
          return b.votes - a.votes;
        })
        .filter(anecdote => anecdote.content.includes(props.filter.content))
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  addVote,
  setNotification,
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList