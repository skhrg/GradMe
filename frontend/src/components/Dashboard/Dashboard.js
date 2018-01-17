import React from 'react';
import { connect } from 'react-redux';
import '../../css/Dashboard.css';
import DashTabs from './DashTabs.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#e3f2fd',
    alternateTextColor: '#000',
    accent1Color: '#e64a19'
  }
})

const mapStateToProps = (state, ownProps) => {
    return {
        tracks: state.tracks,
    }
}
const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

class Dashboard extends React.Component {

    constructor() {
        super();
        /* categories are 12-digit numbers received from back-end. 
            Dummy data using dataformat.json specification. */
        const categories = require('./physicsdummy.json');

        this.state = {data: categories}
    }

    componentDidMount() {document.title="Course Dashboard"; window.scrollTo(0,0)}

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
            <div id="page-container">
                <div className="overview">
                    <div className="title"><h className="huge">Course Dashboard</h></div>
                </div>

                <DashTabs categories={this.state.data}/>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
