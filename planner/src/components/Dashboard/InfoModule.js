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
      {alert(typeof courses)}
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
                  <div className="courseLabel">
                    <div className="course-title">Discrete Mathematics</div>
                    <div className="courseLabel-id">
                      <p className="course-number">EN.550.171</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="courseLabel">
                    <div className="course-title">Linear Algebra</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.110.201</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="courseLabel">
                    <div className="course-title">Nomads, Tyrants, and Kings: Water in the Ancient Near East</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.110.201</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="courseLabel">
                    <div className="course-title">Intro to Optimization</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.550.310</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="courseLabel">
                    <div className="course-title">Differential Equations</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.110.302</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="courseLabel">
                    <div className="course-title">Intro to Probability</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.550.420</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>

                  <div className="courseLabel">
                    <div className="course-title">Data Science</div>
                    <div className="courseLabel-id">
                      <p className="course-number">AS.600.430</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
            </div>
          );
        }
    }
}

export default InfoModule;
