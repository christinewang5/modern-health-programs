// Import react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Axios for making GET requests
import axios from 'axios';

import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

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
		}
		
		renderSections(program_id) {
			if (this.state.dataLoaded) {
				return this.state.sections.map(section => {
					if (program_id  == section.program_id) {
						return (
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
									<div class="card-body" key={section.id}>
										<h5>{section.name}</h5>
										<p class="card-text">{section.description}</p>
								    <LinkContainer to={`/${program_id}/${section.id}`}>
                    <Button variant="outline-info" size="sm">View</Button>
								    </LinkContainer>
									</div>
								</div>
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
							<Link to={`/${program.id}`}><h4>{program.name}</h4></Link>
							<div class="container">
								<div class="row">
								{this.renderSections(program.id)}
								</div>
							</div>
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