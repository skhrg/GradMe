import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class DropdownMulti extends React.Component {
	render() {
		return (
			<Dropdown placeholder={this.props.name} fluid multiple search selection className="ui big" options={majors} />
		)
	}
}

const majors = [
{ key: '1', value: 'Africana Studies', text: 'Africana Studies' },
{ key: '2', value: 'Anthropology', text: 'Anthropology' },
{ key: '3', value: 'Applied Mathematics & Statistics', text: 'Applied Mathematics & Statistics' },
{ key: '4', value: 'Archaeology', text: 'Archaeology' },
{ key: '5', value: 'Behavioral Biology', text: 'Behavioral Biology' },
{ key: '6', value: 'Biology', text: 'Biology' },
{ key: '7', value: 'Biomedical Engineering', text: 'Biomedical Engineering' },
{ key: '8', value: 'Biophysics', text: 'Biophysics' },
{ key: '9', value: 'Chemical & Biomolecular Engineering', text: 'Chemical & Biomolecular Engineering' },
{ key: '10', value: 'Chemistry', text: 'Chemistry' },
{ key: '11', value: 'Civil Engineering', text: 'Civil Engineering' },
{ key: '12', value: 'Classics', text: 'Classics' },
{ key: '13', value: 'Cognitive Science', text: 'Cognitive Science' },
{ key: '14', value: 'Computer Engineering', text: 'Computer Engineering' },
{ key: '15', value: 'Computer Science', text: 'Computer Science' },
{ key: '16', value: 'Earth & Planetary Sciences', text: 'Earth & Planetary Sciences' },
{ key: '17', value: 'East Asian Studies', text: 'East Asian Studies' },
{ key: '18', value: 'Economics', text: 'Economics' },
{ key: '19', value: 'Electrical Engineering', text: 'Electrical Engineering' },
{ key: '20', value: 'Engineering Mechanics', text: 'Engineering Mechanics' },
{ key: '21', value: 'English', text: 'English' },
{ key: '22', value: 'Environmental Engineering', text: 'Environmental Engineering' },
{ key: '23', value: 'Film & Media Studies', text: 'Film & Media Studies' },
{ key: '24', value: 'French', text: 'French' },
{ key: '25', value: 'General Engineering', text: 'General Engineering' },
{ key: '26', value: 'Geography', text: 'Geography' },
{ key: '27', value: 'German', text: 'German' },
{ key: '28', value: 'Global Environmental Change & Sustainability', text: 'Global Environmental Change & Sustainability' },
{ key: '29', value: 'History', text: 'History' },
{ key: '30', value: 'History of Art', text: 'History of Art' },
{ key: '31', value: 'History of Science & Technology', text: 'History of Science & Technology' },
{ key: '32', value: 'Interdisciplinary Studies', text: 'Interdisciplinary Studies' },
{ key: '33', value: 'International Studies', text: 'International Studies' },
{ key: '34', value: 'Italian', text: 'Italian' },
{ key: '35', value: 'Latin American Studies', text: 'Latin American Studies' },
{ key: '36', value: 'Materials Science & Engineering', text: 'Materials Science & Engineering' },
{ key: '37', value: 'Mathematics', text: 'Mathematics' },
{ key: '38', value: 'Mechanical Engineering', text: 'Mechanical Engineering' },
{ key: '39', value: 'Medicine, Science & the Humanities', text: 'Medicine, Science & the Humanities' },
{ key: '40', value: 'Molecular & Cellular Biology', text: 'Molecular & Cellular Biology' },
{ key: '41', value: 'Natural Sciences', text: 'Natural Sciences' },
{ key: '42', value: 'Near Eastern Studies', text: 'Near Eastern Studies' },
{ key: '43', value: 'Neuroscience', text: 'Neuroscience' },
{ key: '44', value: 'Philosophy', text: 'Philosophy' },
{ key: '45', value: 'Physics', text: 'Physics' },
{ key: '46', value: 'Political Science', text: 'Political Science' },
{ key: '47', value: 'Psychology', text: 'Psychology' },
{ key: '48', value: 'Public Health Studies', text: 'Public Health Studies' },
{ key: '49', value: 'Romance Languages', text: 'Romance Languages' },
{ key: '50', value: 'Sociology', text: 'Sociology' },
{ key: '51', value: 'Spanish', text: 'Spanish' },
{ key: '52', value: 'Writing Seminars', text: 'Writing Seminars' }

]

export default DropdownMulti;
