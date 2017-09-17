import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import InfoModule from './InfoModule.js';
import Label from './Label.js';

//test component for material-ui
class CardFold extends React.Component {
    // {props.options.map(function(course,i) {
    //                     return (
    //                         <Label course={course} title={course.title} credits={course.credits}/>
    //                     )
    //                 })}
    render() {
        {console.log(this.props.options)}
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
                </InfoModule>

                    
            </Card>
        );
    }
}
                    

export default CardFold;