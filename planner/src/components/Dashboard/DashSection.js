import React from 'react';
import CardFold from './CardFold.js';

class DashSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section-wrapper">
                    <h className="ui huge header">{this.props.title}</h>
    
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">
      
                        <div className="five wide column">
                        	<CardFold title='Applied Mathematics'/>
                        </div>
       
                        <div className="five wide column">
              				<CardFold title='Applied Mathematics'/>
                        </div>
            
                        <div className="five wide column">
   							<CardFold title='Applied Mathematics'/>
                        </div>
     
                    </div>
              
                    </div>
            </div>
        );
    }
}

export default DashSection;
