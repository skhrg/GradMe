import React from 'react'
import CardFold from './CardFold.js'
import CardHead from './CardHead.js'

class Courses extends React.Component {
    //search bar, course scraping
    constructor(props) {
        super();this.state = {
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
                    <h className="sectionTitle">Your courses</h>
                    <p className="subtitle">Requirements and courses calculated for a major in {cats.curriculum}.</p>
                </div>
                    <div className="ui centered grid">
                    <div className="ui doubling stackable sixteen wide row">

                    {cats.categories.map(function(cat,i) {
                        if (cat.courses == null && cat.subcategories == null) {
                            return (
                                <div key={i} className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                                    <CardHead title={cat.label} credits={cat.credits}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="seven wide column hover" style={{'padding': '0', 'margin': '0 10px'}}>
                                    <CardFold title={cat.label} courses={cat.courses} options={cat.subcategories} credits={cat.credits}/>
                                </div>
                            )
                        }
                    })}
     
                    </div>
              
                    </div>
            </div>
        );
    }    
}

export default Courses;
