import React from 'react';
import CardFold from './CardFold.js';

class Courses extends React.Component {
    //Adds search bar through comprehensive list of courses. Users can view courses available and select ones they have taken.
    constructor(props) {
        super();
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
                                <CardFold title={cat.label} courses={cat.courses} options={cat.subcategories} credits={cat.credits}/>
                            </div>
                        )
                    })}
     
                    </div>
              
                    </div>
            </div>
        );
    }    
}

export default Courses;
