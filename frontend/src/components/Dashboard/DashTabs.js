import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Requirements from './Requirements.js';
import Courses from './Courses.js';
import Overview from './Overview.js';

class DashTabs extends React.Component {

  constructor(props) {
    super();
    // State passed into DashSection and DashOverview children.
    this.state = {
      activetab: '1',
      categories: props.categories
    };
  }

  handleChange(value) {
    this.setState({
      activetab: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      >
        <Tab label="Overview" value="1">
          <Overview/>
        </Tab>
        <Tab label="Requirements" value="2">
          <Requirements categories={this.state.categories}/>
        </Tab>
        <Tab label="Courses" value="3">
          <Courses categories={this.state.categories}/>
        </Tab>
      </Tabs>
    );
  }
}

export default DashTabs;