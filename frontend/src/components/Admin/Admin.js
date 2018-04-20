import React from 'react';
import {Dropdown, Modal, Form, Input} from 'semantic-ui-react'
import '../../css/Admin.css';


class GetName extends React.Component {
	state = { name: '', submittedName: ''}
	

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

  	handleSubmit = () => {
    	const { name } = this.state
    	console.log(this.state.name)
   		this.setState({ submittedName: name})
  	}
  	render () {

  		const { name, submittedName} = this.state;
  		const type = this.props.additionType;
		if (type == null) {
			return null;
		} else if (type == "major") {
			return (
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
				  			<Form.Input placeholder='Major Name' name='name' value={name} onChange={this.handleChange}/>
							<Form.Button content='Submit' />
					</Form.Group>
				</Form>
			);
		} else if (type == "minor") {
			return (
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
				  			<Form.Input placeholder='Minor Name' name='name' value={name} onChange={this.handleChange}/>
							<Form.Button content='Submit' />
					</Form.Group>
				</Form>
			);
		} else if (type == "preProfessionalTrack") {
			return (
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
				  			<Form.Input placeholder='Track Name' name='name' value={name} onChange={this.handleChange}/>
							<Form.Button content='Submit' />
					</Form.Group>
				</Form>
			);
		}
	}
}


class Admin extends React.Component {

	constructor() {
        super();
        this.state = {
		    additionTypeOptions: [
		    	{ text: 'select', value: 'select' },
		     	{ text: 'Major', value: 'major' },
		     	{ text: 'Minor', value: 'minor' },
		     	{ text: 'Pre-Professional Track', value: 'preProfessionalTrack' }
		    ],
		    additionType: null,
		    nameOfAddition: null,

		  	}
    }

    componentDidMount() {document.title="Make a Major, Minor, or Pre-Professional Track"; window.scrollTo(0,0)}

    //onClose = () => this.setState({open: false});

  	handleChange = (event, selected) => {
  		// if the correct one is selected then...
  		
    	
    	if (selected.value == "major") {
    		this.setState({additionType: "major"});
    		console.log("You selected major");
    	} else if (selected.value === "minor") {
    		this.setState({additionType: "minor"});
    		console.log("You selected minor");
    	} else if (selected.value === "preProfessionalTrack") {
    		this.setState({additionType: "preProfessionalTrack"});
    		console.log("You selected pre-professional track");
    	} else if (selected.value == "select") {
    		this.setState({additionType: null});
    		console.log("You selected select");
    	}
	}

    render() {
        return (
            
            <div id="page-container">
                <div className="overview">
                    <div className="title"><h>Make a Major, Minor, or Pre-Professional Track</h></div>
                </div>
                <span> I am adding a {' '} <Dropdown inline options={this.state.additionTypeOptions} 
                onChange={this.handleChange} 
                //text="select" 
                defaultValue={this.state.additionTypeOptions[0].value} 
                />
                </span>
                <GetName additionType = {this.state.additionType}/>
                
                {/*}
                <Modal open={this.state.open} onClose={this.onClose}>
		        	<Modal.Header>Select a Photo</Modal.Header>
		        	<Modal.Content image>
		        		<Modal.Description>
		        			<p>Some contents.</p>
		        		</Modal.Description>
		          </Modal.Content>
		        </Modal>
		    	*/}
            </div>
            
        );
    }
}

export default Admin;