const initialState = ""

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VOTE_NOTIFICATION':
          return "You voted for: '" + action.data.content + "'"
        case 'SET_NEW_ANECDOTE_NOTIFICATION':
            return "New anecdote added: '" + action.data.content + "'"
        case 'REMOVE_NOTIFICATION':
          return ""
        default:
          return state
      }
    }
    
    export const setVoteNotification = (content) => {
      return {
        type: 'SET_VOTE_NOTIFICATION',
        data: {
          content,
        }
      }
    }

    export const setNewAnecdoteNotification = (content) => {
      return {
        type: 'SET_NEW_ANECDOTE_NOTIFICATION',
        data: {
          content,
        }
      }
    }
    
    export const removeNotification = () => {
      return {
        type: 'REMOVE_NOTIFICATION',
      }
    }

export default notificationReducer