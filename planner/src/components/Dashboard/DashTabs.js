import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import DashSection from './DashSection.js';
import Overview from './Overview.js';

class DashTabs extends React.Component {

  constructor(props) {
    super(props);
    // State passed into DashSection and DashOverview children.
    this.state = {
      activetab: '1',
      categories: this.props.categories,
      names: this.props.names
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
          <DashSection categories={this.state.categories} names={this.state.names}/>
        </Tab>
        <Tab label="Courses" value="3">
          <DashSection categories={this.state.categories} names={this.state.names}/>
        </Tab>
      </Tabs>
    );
  }
}

export default DashTabs;