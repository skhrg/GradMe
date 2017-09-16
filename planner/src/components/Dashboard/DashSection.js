import React from 'react';
import CardFold from './CardFold.js';

class DashSection extends React.Component {

    constructor(props) {
        super(props);
        const categories = this.props.categories;
        /** The names prop is rendered as module titles.
            Need 1) data to be outputted in logical format,
                 2) a parser in Dashboard.js to turn data into
                    valid string.
         **/
        // const names = this.props.names;

        // /** Generate description for DashSection stating all 
        //     chosen majors, minors, and tracks. */
        // let description = '';
        // for (let i=0;i<names.length;i++) {
        //     if (i===names.length - 1) {
        //         description += names[i] + '.'
        //     } else if (i===(names.length - 2)) {
        //         description += names[i] + ', and '
        //     } else {
        //         description += names[i] + ", "
        //     }
        // }

        // this.state = {
        //     description,
        //     names,
        //     categories
        // }
        this.state = {
            data: categories
        }
    }
    /* receives array of requirement categories as props from Dashboard.js 
    	and conditionally renders */
    render() {
        const categories = this.state.data;
        return (
            <div className="section insetShadow">
                <div className="sectionCaption">
                    <h className="sectionTitle">Your curriculum</h>
                    <p className="subtitle">Requirements & courses calculated for {this.state.description}</p>
                </div>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">
                    
                    
     
                    </div>
              
                    </div>
            </div>
        );
    }
                    // {categories.categories.map(function(category,i) {
                    //     return (
                    //         <div className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                    //             <CardFold title={category[i].type} credits='53'/>
                    //         </div>
                    //     )
                    // })}
}

export default DashSection;
