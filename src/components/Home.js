// Import react
import React, { Component, useState } from 'react';

// Axios for making GET requests
import axios from 'axios';

import { LinkContainer } from 'react-router-bootstrap';
import { Button, Collapse } from 'react-bootstrap';

function LearnMoreCollapse(program) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(!open)}
				aria-controls="learnmore-collapse-text"
				aria-expanded={open}
				size="sm"
				variant="link">Learn More</Button>
			<Collapse in={open}>
				<div id="learnmore-collapse-text">
					{program.description}
				</div>
			</Collapse>
		</>
	);
}

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
				if (program_id == section.program_id) {
					return (
						<div class="col-md-4" key={section.id}>
							<div class="card mb-4 shadow-sm">
									<img class="card-img-top" 
									width="100%"
									height="225"
									src={`${section.image_url}`}/>
								<div class="card-body" key={section.id}>
									<h5>{section.name}</h5>
									<LinkContainer to={`/sec/${section.id}`}>
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
						<h4>{program.name}</h4>
						<div class="text-right">
							<LearnMoreCollapse description={program.description} />
						</div>
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