/* action types */
export const CHANGE_SLIDE = 'CHANGE_SLIDE'

/* action creator */
export function changeSlide(index) {
	return { type: CHANGE_SLIDE, index}
}