import React from 'react';
import CardFold from './CardFold.js';

class DashSection extends React.Component {

    constructor(props) {
        super(props);
        const categories = this.props.majors;
        const names = this.props.names;

        /** Generate description for DashSection stating all 
            chosen majors, minors, and tracks. */
        let description = '';
        for (let i=0;i<names.length;i++) {
            if (i==names.length - 1) {
                description += names[i] + '.'
            } else {
                description += names[i] + " & "
            }
        }

        this.state = {
            description,
            categories
        }
    }
    /* receives array of requirement categories as props from Dashboard.js 
    	and conditionally renders */
    render() {
        const categories = this.state.categories;
        return (
            <div className="section-wrapper">
                    <h className="ui huge header">Your description</h>
                    <p className="subtitle">Requirements calculated for {this.state.description}</p>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">
                    
                    {categories.map(function(category,index) {
                        return (
                            <div className="seven wide column">
                                <CardFold title={category} credits='53'/>
                            </div>
                        )
                    })}
     
                    </div>
              
                    </div>
            </div>
        );
    }
}

export default DashSection;
