const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const newGood = state.good + action.data.good
      return {
        good: newGood,
        ok: state.ok,
        bad: state.bad
      }
    case 'OK':
      const newOk = state.ok + action.data.ok
      return {
        good: state.good,
        ok: newOk,
        bad: state.bad
      }
    case 'BAD':
      const newBad = state.bad + action.data.bad
      return {
        good: state.good,
        ok: state.ok,
        bad: newBad
      }
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer