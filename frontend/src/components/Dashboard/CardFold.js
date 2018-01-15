import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import InfoModule from './InfoModule.js';

//test component for material-ui
class CardFold extends React.Component {
    // {props.options.map(function(course,i) {
    //                     return (
    //                         <Label course={course} title={course.title} credits={course.credits}/>
    //                     )
    //                 })}
    render() {
      const credits = this.props.credits
      const courses = this.props.courses
      const options = this.props.options
      // {console.log(courses)}
      // {console.log(options)}
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
                <InfoModule expandable={true} credits={credits} options={options} courses={courses}>
                </InfoModule>
            </Card>
        );
    }
}
                    

export default CardFold;