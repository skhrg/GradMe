import React, {Component} from 'react'
import { Tab, Button} from 'semantic-ui-react'
import OtherMajorsProgress from './OtherMajorsProgress.js'
import OtherMinorsProgress from './OtherMinorsProgress.js'
import OtherPreProfTracksProgress from './OtherPreProfTracksProgress.js'


const panes = [
  { menuItem: 'Majors', render: () => <Tab.Pane attached={true}><OtherMajorsProgress /></Tab.Pane> },
  { menuItem: 'Minors', render: () => <Tab.Pane attached={true}><OtherMinorsProgress /></Tab.Pane> },
  { menuItem: 'Pre-Professional Tracks', render: () => <Tab.Pane attached={true}><OtherPreProfTracksProgress /></Tab.Pane> },
]



const OtherProgress = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

)


export default OtherProgress;