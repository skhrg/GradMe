import { CHANGE_SLIDE, changeSlide } from '../actions/ui.js'

const initialState = {
  tracks: [],
  courses: [],
  ui: {
  	activeSlide: 0,
  }
}

function plannerApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      return Object.assign({}, state, {
        ui: {
          activeSlide: action.index,
        }
      })

    default:
      return state
  }
}

export default plannerApp
