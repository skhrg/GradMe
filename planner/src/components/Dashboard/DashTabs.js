import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import DashSection from './DashSection.js';
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
          <DashSection categories={this.state.categories}/>
        </Tab>
        <Tab label="Courses" value="3">
          <DashSection categories={this.state.categories}/>
        </Tab>
      </Tabs>
    );
  }
}

export default DashTabs;