import { CHANGE_SLIDE, changeSlide } from '../actions/ui.js'

const initialState = {
  tracks: [],
  courses: [],
  ui: {
  	activeSlide: 1,
  }
}

function plannerApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      return Object.assign({}, state, {
        activeSlide: action.index //additional field on CHANGE_SLIDE action
      })

    default:
      return state
  }
}

export default plannerApp
