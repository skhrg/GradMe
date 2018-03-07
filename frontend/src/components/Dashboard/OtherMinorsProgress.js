import React from 'react'
import { Progress, Button} from 'semantic-ui-react'

const OtherMinorsProgress = () => (
    <div>
    <Progress percent={84}  color='teal' label = "Applied Mathematics & Statistics" progress />
    <Progress percent={82}  color='pink' label = "Computer Integrated Surgery" progress />
    <Progress percent={70}  color='green' label = "Entrepreneurship & Management" progress />
    <Progress percent={70}  color='olive' label = "Earth & Planetary Sciences" progress />
    <Progress percent={65}  color='yellow' label = "Computational Medicine" progress />
    {/*
    <Progress percent={63}  color='red' label = "Robotics" progress />
    <Progress percent={58}  color='purple' label = "Space Science & Engineering" progress />
    <Progress percent={50}  color='blue' label = "Environmental Engineering" progress />
    <Progress percent={45}  color='violet' label = "Financial Economics" progress />
    <Progress percent={32}  color='orange' label = "History of Science & Technology" progress />
    */}
    <Button primary>See More Minors</Button>
    </div>
)

/*
Africana Studies
Anthropology
Applied Mathematics & Statistics
Archaeology
Behavioral Biology
Biology
Biomedical Engineering
Biophysics
Chemical & Biomolecular Engineering
Chemistry
Civil Engineering
Classics
Cognitive Science
Computer Engineering
Computer Science
Earth & Planetary Sciences
East Asian Studies
Economics
Electrical Engineering
Engineering Mechanics
English
Environmental Engineering
Film & Media Studies
French
General Engineering
Geography
German
Global Environmental Change & Sustainability
History
History of Art
History of Science & Technology
Interdisciplinary Studies
International Studies
Italian
Latin American Studies
Materials Science & Engineering
Mathematics
Mechanical Engineering
Medicine, Science & the Humanities
Molecular & Cellular Biology
Natural Sciences
Near Eastern Studies
Neuroscience
Philosophy
Physics
Political Science
Psychology
Public Health Studies
Romance Languages
Sociology
Spanish
Writing Seminars
*/
export default OtherMinorsProgress



