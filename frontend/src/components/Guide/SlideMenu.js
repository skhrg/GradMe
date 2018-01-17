import React from 'react'
import { Menu } from 'semantic-ui-react'

class SlideMenu extends React.Component {

  handler(id) {
    console.log(id)
    {console.log(this.props.selectSlide)}
    this.props.selectSlide(id)
  }

  handleClick(e, {id}) {
    //set store.ui.activeSlide: id
    this.handler(id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState);
  }

  render() {

    return (
      <Menu text pointing secondary vertical className="ui huge left-text floated menu">
        <Menu.Item name={this.props.options[0]} id={0} active={this.props.activeSlide === 0} onClick={this.handleClick.bind(this)} />
        <Menu.Item name={this.props.options[1]} id={1} active={this.props.activeSlide === 1} onClick={this.handleClick.bind(this)} />
        <Menu.Item name={this.props.options[2]} id={2} active={this.props.activeSlide === 2} onClick={this.handleClick.bind(this)} />
        <Menu.Item name={this.props.options[3]} id={3} active={this.props.activeSlide === 3} onClick={this.handleClick.bind(this)} />
      </Menu>
    )
  }
}

export default SlideMenu;