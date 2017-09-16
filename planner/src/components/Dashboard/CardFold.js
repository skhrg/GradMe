import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import InfoModule from './InfoModule.js';

//test component for material-ui
class CardFold extends React.Component {

    render() {
      const creditsComplete = 'xx'
      const subtitle = creditsComplete + '/' + this.props.credits
        + ' credits'
        return (
            <Card style={{margin: '15px 0', 'borderRadius': '4px'}}>
                <CardHeader
                    title={this.props.title}
                    subtitle={subtitle}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <InfoModule expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </InfoModule>
            </Card>
        );
    }
}

export default CardFold;
