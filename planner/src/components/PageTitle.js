import React from 'react';

class PageTitle extends React.Component {

    render() {
        return (
            <div className="pagetitle">{this.props.title}</div>
        );
    }
}

export default PageTitle;
