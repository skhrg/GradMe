import React from 'react'; 
import Label from './Label';

class InfoModule extends React.Component {

    render() {
      /** cases: 
        this.props.courses is not undefined and options is
        this.props.options is not undefined and courses is
        this.props.credits is not undefined and credits is
       */
      //courses is passing properly
      const courses = this.props.courses
      const options = this.props.options
      
      if (typeof courses !== "undefined") {
        return(
            <div className="module">
              {courses.map(function(course, i) {
                return (
                    <div key={i} className="courseLabel">
                      <div className="course-title">{course.title}</div>
                      <div className="courseLabel-id">
                        <p className="course-number">{course.id}</p>
                        <p className="course-credit">{course.credits + " credits"}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          )
       } else if (typeof options !== "undefined") {
        return (
            <div className="module">
              {options.map(function(option, i) {
                return (
                    <div key={i} className="courseLabel">
                      <div className="course-title">{option.label}</div>
                      <div className="courseLabel-id">
                        <p className="course-number">{options.type}</p>
                        <p className="course-credit">{option.credits + " credits"}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          );
        }
    }
}

export default InfoModule;
