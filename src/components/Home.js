// Import react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Axios for making GET requests
import axios from 'axios';

class Home extends Component {
	constructor() {
		super();
		// Define state
		this.state = {
			programs: [],
			dataLoaded: false
		}
	}
	  
	// Is called when the component succesfully loads
	componentDidMount() {
		// GET request to our server
		axios({
			method: 'GET',
			url: '/api/programs'
		})
		// Saves the data to state. Only way to change the state is with setState
		.then(data => {
			console.log(data.data.data);
			this.setState({
				programs: data.data.data,
				dataLoaded: true
			});
			})
			// logs an error
			.catch(err => {
				console.log(err);
			});
	}

	renderSections() {
	}

	renderPrograms() {
		if (this.state.dataLoaded) {
			return this.state.programs.map(program => {
				return (
					<div class="container" key={program.id}>
						<Link to={`/${program.id}`}>{program.name}</Link>
						<p className="program description">{program.description}</p>
					</div>
				)

			})
		} else {
			<p>Loading...</p>
		}
	}

  render() {
    return (
      <div className="Home">
		<div class="jumbotron text-center">
			<h1>Modern Health Programs</h1>
		</div>
      	{this.renderPrograms()}
      </div>
    )
  }
};

export default Home;