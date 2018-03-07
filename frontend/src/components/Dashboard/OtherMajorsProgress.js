import React from 'react'
import { Progress, Button} from 'semantic-ui-react'

const OtherMajorsProgress = () => (
    <div>
    <Progress percent={60}  color='red' label = "Biophysics" progress />
    <Progress percent={54}  color='orange' label = "Applied Mathematics & Statistics" progress />
    <Progress percent={52}  color='yellow' label = "Earth & Planetary Sciences" progress />
    <Progress percent={49}  color='olive' label = "Economics" progress />
    <Progress percent={42}  color='green' label = "Public Health Studies" progress />
    {/*
        <Progress percent={39}  color='teal' label = "Biology" progress />
        <Progress percent={35}  color='blue' label = "Chemistry" progress />
        <Progress percent={32}  color='purple' label = "Molecular & Cellular Biology" progress />
        <Progress percent={29}  color='violet' label = "Psychology" progress />
        <Progress percent={27}  color='pink' label = "Environmental Engineering" progress />
    */}
    <Button primary>See More Majors</Button>
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
export default OtherMajorsProgress



