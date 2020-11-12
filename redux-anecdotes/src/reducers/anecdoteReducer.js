const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_VOTE':
      const id = action.data.id
      const anecdoteToAddLikeTo = state.find(n => n.id === id)
      anecdoteToAddLikeTo.votes += 1
      return state.map(state => state)
    case 'NEW_ANECDOTE':
      const anecdoteToAdd = {
        content: action.data.content,
        id: getId(),
        votes: 0
        }
        return [...state, anecdoteToAdd]
    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const addAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default anecdoteReducer