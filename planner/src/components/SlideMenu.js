import React from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/components/menu.min.css'

class SlideMenu extends React.Component {

  constructor(props) {
  	super();
  	this.state = {activeItem: props.active};
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, {name}) {
  	//set state of parent component
    this.props.handler({name});
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
      <Menu text pointing secondary vertical className="ui huge left floated menu">
        <Menu.Item name={this.props.options.opt1} active={activeItem === this.props.options.opt1} onClick={this.handleClick} />
        <Menu.Item name={this.props.options.opt2} active={activeItem === this.props.options.opt2} onClick={this.handleClick} />
        <Menu.Item name={this.props.options.opt3} active={activeItem === this.props.options.opt3} onClick={this.handleClick} />
        <Menu.Item name={this.props.options.opt4} active={activeItem === this.props.options.opt4} onClick={this.handleClick} />
      </Menu>
    )
  }
}

export default SlideMenu;