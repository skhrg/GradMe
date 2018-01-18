import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import InfoModule from './InfoModule.js';

const styles = {
  card: {
    margin: '15px 0',
    borderRadius: '4px',
    background: 'none',
  },
  header: {
    background: '#fff',
    padding: '4px',
    fontSize: '20px'
  }
}

const colors = {
  goodGreen: '#2E7D32',
  mellYello: '#FFD600',
  badOrange: '#E65100'
}

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
            <Card style={styles.card}>
                <CardHeader
                    title={this.props.title}
                    titleColor='#000'
                    subtitle={subtitle}
                    subtitleColor={colors.goodGreen}
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