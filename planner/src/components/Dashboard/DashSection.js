import React from 'react';
import CardFold from './CardFold.js';

class DashSection extends React.Component {

    constructor(props) {
        super(props);
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
            data: props.categories,
        }
    }
    /* receives array of requirement categories as props from Dashboard.js 
    	and conditionally renders */
    render() {
        const cats = this.state.data;
        return (
            <div className="section insetShadow">
                <div className="sectionCaption">
                    <h className="sectionTitle">Your curriculum</h>
                    <p className="subtitle">Requirements and courses calculated for a major in {cats.curriculum}.</p>
                </div>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">

                    {cats.categories.map(function(cat,i) {
                        return (
                            <div key={i} className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                                <CardFold title={cat.label} courses={cats.courses} options={cats.tracks} credits='53'/>
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
