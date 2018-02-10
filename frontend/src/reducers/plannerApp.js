import { CHANGE_SLIDE, CHANGE_TAB } from '../actions/ui.js'
import { SELECT_TRACKS } from '../actions/degreeData.js'

const initialState = {
  curriculum: {
    majors: [],
    minors: [],
    proffs: []
  },
  courses: [],
  ui: {
    activeSlide: 0,
    activeTab: 1,
  }
}

function setUX(state = {}, action) {
  switch (action.type) {
    case CHANGE_SLIDE:
      return Object.assign({}, state, {
        ...state,
        activeSlide: action.index
      })
    case CHANGE_TAB:
      return Object.assign({}, state, {
        ...state,
        activeTab: action.value
      })
    default:
      return state
  }
}

function selectTracks(state = {}, action) {
  switch (action.type) {
    case SELECT_TRACKS:
      return Object.assign({}, state, {
        ...state,
        curriculum: action.curriculum,
      })
    default:
      return state
  }
}

function selectCourses(state = {}, action) {
  return state;
}

// The main reducer. Composed of other reducers.
function plannerApp(state = initialState, action) {
  return {
    ui: setUX(state.ui, action),
    curriculum: selectTracks(state.curriculum, action),
    courses: selectCourses(state.courses, action)
  }
}

export default plannerApp
