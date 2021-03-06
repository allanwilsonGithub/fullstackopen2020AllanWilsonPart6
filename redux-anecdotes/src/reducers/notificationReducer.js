const initialState = ''

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
              return action.data.content
        case 'REMOVE_NOTIFICATION':
          return ""
        default:
          return state
      }
    }
    
    export const setNotification = (content, timeout) => {
      return async dispatch => {
        dispatch({
          type: 'SET_NOTIFICATION',
          data: {
            content,
          }
        })
        const timer = setTimeout(() => {
          dispatch({
            type: 'REMOVE_NOTIFICATION',
          })
        }, timeout)
        clearTimeout(timer-1)
      }
    }

export default notificationReducer