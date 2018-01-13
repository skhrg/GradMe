import React from 'react'
import { Menu } from 'semantic-ui-react'

class SlideMenu extends React.Component {

  constructor(props) {
  	super();
  	this.state = {activeItem: props.active};
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, {name}) {
  	//set state of parent component
    this.props.handler(name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.active === prevState.activeItem) {
      this.setState({
        activeItem: this.props.active
      })
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu text pointing secondary vertical className="ui huge left-text floated menu">
        <Menu.Item name={this.props.options[0]} active={activeItem === this.props.options[0]} onClick={this.handleClick} />
        <Menu.Item name={this.props.options[1]} active={activeItem === this.props.options[1]} onClick={this.handleClick} />
        <Menu.Item name={this.props.options[2]} active={activeItem === this.props.options[2]} onClick={this.handleClick} />
        <Menu.Item name={this.props.options[3]} active={activeItem === this.props.options[3]} onClick={this.handleClick} />
      </Menu>
    )
  }
}

export default SlideMenu;