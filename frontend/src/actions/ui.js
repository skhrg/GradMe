/* action types */
export const CHANGE_SLIDE = 'CHANGE_SLIDE'

/* other constants */
export const Slides = {
	INTRO: 'INTRO',
	MAJORS: 'MAJORS',
	MINORS: 'MINORS',
	PRE_PROF: 'PRE-PROF'
}

/* action creator */

export function changeSlide(number) {
	return { type: CHANGE_SLIDE, index: number }
}