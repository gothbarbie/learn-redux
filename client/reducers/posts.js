/*
  A reducer takes in two things:

    1. The action (what happened)
    2. Copy of current state

*/

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after
      ]
    default:
      return state
  }
  return state
}

export default posts
