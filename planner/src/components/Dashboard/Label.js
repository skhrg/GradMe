import React from 'react';

class Label extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="label">
                <div class="course-title">Discrete Mathematics</div>
               	<div class="label-id">
                    <p class="course-number">EN.550.171</p>
                    <p class="course-credit">4 credits</p>
                </div>
            </div>
        );
    }
}

export default Label;
