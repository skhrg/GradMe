import React from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/components/menu.min.css'

class SlideMenu extends React.Component {

  constructor(props) {
  	super();
  	this.state = {activeItem: props.options.opt1};
  	this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
  	//call method to set state of parent component
    this.props.handler(e, {name});
    //also set state of this component for Menu Item children
    this.setState({
        	activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state

  	// WOULD LIKE TO CONVERT STATE ACTIVEITEM TO BOOLEAN - PAGECONTAINER STATE HAS BOOLEAN AND STRING STATE

    return (
      <Menu text pointing secondary vertical className="ui huge left floated menu">
        <Menu.Item name={this.props.options.opt1} active={activeItem === this.props.options.opt1} onClick={this.handleItemClick} />
        <Menu.Item name={this.props.options.opt2} active={activeItem === this.props.options.opt2} onClick={this.handleItemClick} />
        <Menu.Item name={this.props.options.opt3} active={activeItem === this.props.options.opt3} onClick={this.handleItemClick} />
        <Menu.Item name={this.props.options.opt4} active={activeItem === this.props.options.opt4} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default SlideMenu;