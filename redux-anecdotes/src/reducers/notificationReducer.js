const initialState = ""

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return state
        case 'REMOVE_NOTIFICATION':
          return state.map
        default:
          return state
      }
    }
    
    export const setNotification = (content) => {
      return {
        type: 'SET_NOTIFICATION',
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