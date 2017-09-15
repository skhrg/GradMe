import React from 'react';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        /* categories are 12-digit numbers received from back-end. 
            Currently hard-coded example.
        */
        const categories = [
            3435501711000010, //discrete course id
            69013,
            4632464565834527,
            1235134636247245,
            3463464257277576
        ]

        const names = this.nameCategories(categories)

        this.state = {
            categories,
            names
        }
    }

    componentDidMount() {
        document.title="Course Dashboard";
    }
    /* Parse categories to generate name string. 
            Search json data using major, minor, and pre-prof ids.
            Generate description of requirements for multi-option paths.
         */ 
    nameCategories(categories) {
        const jsonmajors = require('../Guide/majors.json');
        const majorMap = jsonmajors.majors;

        const jsonminors = require('../Guide/minors.json');
        const minorMap = jsonminors.minors;

        const names = categories.map(function(major,i) {
            return majorMap[i]["text"]
        })
        return names
    }

    /*  Parse 2D arraylist to describe all categories and courses in 
        simplified 2D array.
        Outputs Array[][] object with the first index of each row
        containing a string description of the requirement.
        The rest of the row is followed by required courses, if any.
    */
    parseCategories(cats) {
        if(!cats.isArray([])) {
            return ([['Invalid Category'],[0]])
        }

        const result = new Array(cats.length);
        for(let i=0; i < cats.length; i++) {

            const currentCat = cats[i];

            const catType = currentCat.shift();

            /** when first index of category is 0, simply map 
                following required courses. */
            if (catType === 0) {
                result[i] = currentCat.map(function(course) {
                    return course;
                })
                //Add string description to beginning of category.
                result[i].unshift("Required courses")

            // case when require to take subset of list of courses
            } else if (catType === 1) {
                result[i] = currentCat.map(function(course, index) {
                    /** second cat index denotes number of credits to take.
                        Mapped to string description. Remaining entries are courses. */
                    if (index === 0) {
                        return (course + ' credits of listed courses');
                    }
                    return course;
                })
            /** case for distribution requirement by area or level.
                Current categories contains [0] - number of credits at level
                                            [1] - type of credits in 11-digit id
              */
            } else if (catType === 2) {
                let numCredits = currentCat.unshift();
                let typeCredits = this.parseID(currentCat[0])
                return (numCredits + 'credits ')
            }
        }
    }

    /** Parses various digit-ids and return descriptive name strings. */
    parseID(id) {
        id = id.toString();
        const result = '';
        if(id.length === 11) {
            //break up string
            const level = id.substring(0,1);
            const credits = id.substring(1,2);
            const dept = id.substring(2,5);
            const writing = id.substring(5,6);
            let areas = id.substring(6,11);

            for (let i = 0; i < areas.length; i++){
                if(areas[i]===0) {continue;}
                switch(i) {
                    case 0: 
                        areas += 'humanities%'
                        break;
                    case 1:
                        areas += 'natural sciences%'
                        break;
                    case 2:
                        areas += 'social sciences%'
                        break;
                    case 3:
                        areas += 'quantitative sciences%'
                        break;
                    case 4:
                        areas += 'engineering'
                        break;
                }
            }
            const numAreas = areas.length
            if (areas.length === 5) {
                areas='';
            } else {
                const temp = areas.split("%");
                if(temp.length===1) {
                    areas = temp[0];
                } else {
                    areas='';
                    temp.map(function(area,i) {
                        if(i===temp.length) {
                            areas += (', and ' + area);
                        } else {
                            areas += (area + ', ')
                        }
                    })
                }
            }

        }
    }

    render() {
        return (
            <div id="page-container">
                <div className="overview">
                    <div className="title"><h className="huge">Course Dashboard</h></div>
                </div>

                <DashTabs categories={this.state.categories} names={this.state.names}/>
            </div>
        );
    }
}

export default Dashboard;
