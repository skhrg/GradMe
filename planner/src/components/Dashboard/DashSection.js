import React from 'react';
import CardFold from './CardFold.js';

class DashSection extends React.Component {

    constructor(props) {
        super(props);
        const categories = this.props.categories;
        const names = this.props.names;

        /** Generate description for DashSection stating all 
            chosen majors, minors, and tracks. */
        let description = '';
        for (let i=0;i<names.length;i++) {
            if (i==names.length - 1) {
                description += names[i] + '.'
            } else if (i==(names.length - 2)) {
                description += names[i] + ', and '
            } else {
                description += names[i] + ", "
            }
        }

        this.state = {
            description,
            names,
            categories
        }
    }
    /* receives array of requirement categories as props from Dashboard.js 
    	and conditionally renders */
    render() {
        const names = this.state.names;
        return (
            <div className="section-wrapper">
                    <h className="ui huge header">Your curriculum</h>
                    <p className="subtitle">Requirements & courses calculated for {this.state.description}</p>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">
                    
                    {names.map(function(name,index) {
                        return (
                            <div className="seven wide column">
                                <CardFold title={name} credits='53'/>
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
