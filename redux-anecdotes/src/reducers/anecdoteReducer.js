import anecdotesService from '../services/anecdotes'

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
  return async dispatch => {
    await anecdotesService.addVote(id)
    dispatch({
      type: 'ADD_VOTE',
      data: { id }
    })
  }
}

export const addAnecdote = content => {
  return async dispatch => {
    const data = await anecdotesService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data,
    })
  }
}




export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}



export default anecdoteReducer