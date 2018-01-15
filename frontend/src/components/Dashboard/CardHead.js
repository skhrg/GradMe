import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

//test component for material-ui
class CardHead extends React.Component {
    render() {
      const courses = this.props.courses
      const options = this.props.options
      const creditsComplete = 'xx'
      const subtitle = creditsComplete + '/' + this.props.credits
        + ' credits'
        return (
            <Card style={{margin: '15px 0', 'borderRadius': '4px'}}>
                <CardHeader title={this.props.title} subtitle={subtitle}/>
            </Card>
        );
    }
}
                    

export default CardHead;