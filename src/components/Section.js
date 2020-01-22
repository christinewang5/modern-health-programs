import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Program extends Component {
  constructor() {
    super();
    this.state = {
      section: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    // Use string interpolation to get the id from the URL
    axios({
	  method: 'GET',
      url: `/api/sections/${this.props.match.params.program_id}/${this.props.match.params.section_id}`
    })
    .then(data => {
      this.setState({
		  section: data.data.data,
      dataLoaded: true })
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  renderSection() {
    const section = this.state.section;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="section name">{section.name}</p>
          <p className="section description">{section.description}</p>
        </div>
      )
    }
    else {
      return (
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="section">
        {this.renderSection()}
        <Link to="/">Back to Programs</Link>
      </div>
    )
  }
}