const initialState = { content: "" }

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
          return action.data
        default:
          return state
      }
    }

    export const setFilter = (content) => {
      return {
        type: 'SET_FILTER',
        data: {
          content,
        }
      }
    }

export default filterReducer