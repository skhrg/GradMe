import React from 'react'
import { Menu } from 'semantic-ui-react'

class SlideMenu extends React.Component {

    handleSelect(e, {id}) {
        //set store.ui.activeSlide: id
        this.props.selectSlide(id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState);
    }

    render() {
        return (
            <Menu text pointing secondary vertical className="ui huge left-text floated menu">
                {this.props.options.map((item, i) => {
                    return (
                        <Menu.Item 
                            name={item} key={i} id={i} 
                            active={this.props.activeSlide === i} 
                            onClick={this.handleSelect.bind(this)}
                        />
                    )
                })}
            </Menu>
        )
    }
}

export default SlideMenu;
