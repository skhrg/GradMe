
import React from 'react';
import '../../css/Overview.css';

class CreditsLeft extends React.Component {
    
    render() {
        return (
            <div className='progression'>
                <h1>You need...</h1>
                    <h2><span style = {{color: "#1e88e5"}}> 40 </span> more credits to complete the Physics major</h2>
                    <h2><span style = {{color: "#d81b60"}}> 23 </span> more credits to complete the Bioethics minor</h2>
                    <h2><span style = {{color: "#f4511e"}}> 4 </span> more credits to complete the Entrepreneurship & Management minor</h2>
                    <h2><span style = {{color: "#fdd835"}}> 28 </span> more credits to complete the Pre-Medical track</h2>
            </div>
        );
    }
}

export default CreditsLeft;
