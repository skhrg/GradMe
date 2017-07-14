import React from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/components/menu.min.css'

class SlideMenu extends React.Component {

  constructor() {
  	super();
  	this.state = {activeItem: 'Find your requirements'};

  	this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({
        activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state

   //  const itemNames = {
  	// 	n1: "Find your requirements",
  	// 	n2: "Pick a major",
  	// 	n3: "Choose a minor",
  	// 	n4: "Select a Pre-Professional Track"
  	// }
  	// WOULD LIKE TO CONVERT STATE ACTIVEITEM TO BOOLEAN - PAGECONTAINER STATE HAS BOOLEAN AND STRING STATE

    return (
      <Menu text pointing secondary vertical className="ui huge left floated menu">
        <Menu.Item name='Find your requirements' active={activeItem === 'Find your requirements'} onClick={this.handleItemClick} />
        <Menu.Item name='Choose your major' active={activeItem === 'Choose your major'} onClick={this.handleItemClick} />
        <Menu.Item name='Pick your minor' active={activeItem === 'Pick your minor'} onClick={this.handleItemClick} />
        <Menu.Item name='Select a Pre-Professional Track' active={activeItem === 'Select a Pre-Professional Track'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default SlideMenu;