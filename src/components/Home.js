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
			sections: [],
			dataLoaded: false
		}
	}
		// Is called when the component succesfully loads
		componentDidMount() {
			function getSections() {
				return axios.get('/api/sections');
			}
			function getPrograms() {
				return axios.get('/api/programs');
			}
	
			// GET request for both sections and programs
			axios.all([getSections(), getPrograms()])
				.then(axios.spread((secs, progs) => {
					console.log(secs.data.data);
					console.log(progs.data.data);
					this.setState({
						sections: secs.data.data,
						programs: progs.data.data,
						dataLoaded: true
					});
				}))
				// logs an error
				.catch(err => {
					console.log(err);
				});
				// axios({
				// 	method: 'GET',
				// 	url: '/api/programs'
				// })
				// // Saves the data to state. Only way to change the state is with setState
				// .then(data => {
				// 	console.log(data.data.data);
				// 	this.setState({
				// 		programs: data.data.data,
				// 		dataLoaded: true
				// 	});
				// })
				// // logs an error
				// .catch(err => {
				// 	console.log(err);
				// });
		}
		
		renderSections(program_id) {
			if (this.state.dataLoaded) {
				return this.state.sections.map(section => {
					if (program_id  == section.program_id) {
						return (
							<div class="container" key={section.id}>
								<Link to={`/${section.id}`}>{section.name}</Link>
								<p className="section description">{section.description}</p>
							</div>
						)
					}
				})
			} else {
				<p>Loading...</p>
			}
		}
	
		renderPrograms() {
			if (this.state.dataLoaded) {
				return this.state.programs.map(program => {
					return (
						<div class="container" key={program.id}>
							<Link to={`/${program.id}`}>{program.name}</Link>
							<p className="program description">{program.description}</p>
							{this.renderSections(program.id)}
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