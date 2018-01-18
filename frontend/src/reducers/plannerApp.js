import { CHANGE_SLIDE, CHANGE_TAB } from '../actions/ui.js'

const initialState = {
  tracks: [],
  courses: [],
  ui: {
    activeSlide: 0,
    activeTab: 1,
  }
}

function plannerApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      return Object.assign({}, state, {
        ui: {
          ...state.ui,
          activeSlide: action.index,
        }
      })
    case CHANGE_TAB:
      return Object.assign({}, state, {
        ui: {
          ...state.ui,
          activeTab: action.value,
        }
      })
    default:
      return state
  }
}

export default plannerApp
