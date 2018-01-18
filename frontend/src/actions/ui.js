/* action types */
export const CHANGE_SLIDE = 'CHANGE_SLIDE';
export const CHANGE_TAB = 'CHANGE_TAB';

/* action creator */
export function changeSlide(index) {
	return { type: CHANGE_SLIDE, index }
}

export function changeTab(value) {
	return { type: CHANGE_TAB, value }
}