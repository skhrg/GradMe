export const SELECT_TRACKS = 'SELECT_TRACKS';
export const SELECT_COURSES = 'SELECT_COURSES';

// passed in as array from component/Dashboard/Dropdown.js
export function selectTracks(tracks) {
	return { type: SELECT_TRACKS, curriculum: tracks}
}





// export const SELECT_MAJORS = 'SELECT_TRACKS';
// export const SELECT_MINORS = 'SELECT_TRACKS';
// export const SELECT_PROFFS = 'SELECT_TRACKS';
// //export const SELECT_COURSES = 'SELECT_COURSES';

// // passed in as array from component/Dashboard/Dropdown.js
// export function selectMajors(tracks) {
// 	return { type: SELECT_MAJORS, majors: tracks}
// }

// export function selectMinors(tracks) {
// 	return { type: SELECT_MINORS, majors: tracks}
// }

// export function selectProffs(tracks) {
// 	return { type: SELECT_PROFFS, majors: tracks}
// }