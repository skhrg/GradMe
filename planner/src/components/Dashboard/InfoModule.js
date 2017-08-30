import React from 'react';

class InfoModule extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="module">
                  <div className="label">
                    <div className="course-title">Discrete Mathematics</div>
                    <div className="label-id">
                      <p className="course-number">EN.550.171</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="label">
                    <div className="course-title">Linear Algebra</div>
                    <div className="label-id">
                      <p className="course-number">AS.110.201</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="label">
                    <div className="course-title">Nomads, Tyrants, and Kings: Water in the Ancient Near East</div>
                    <div className="label-id">
                      <p className="course-number">AS.110.201</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="label"></div>
                  
                  <div className="label">
                    <div className="course-title">Differential Equations</div>
                    <div className="label-id">
                      <p className="course-number">AS.110.312</p>
                      <p className="course-credit">4 credits</p>
                    </div>
                  </div>
                  
                  <div className="label">
                    
                  </div>
                  
                  <div className="label">
                    
                  </div>
                  
            </div>
        );
    }
}

export default InfoModule;
