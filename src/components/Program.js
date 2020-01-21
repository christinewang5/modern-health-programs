import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Program extends Component {
  constructor() {
    super();
    this.state = {
      program: null,
      dataLoaded: false
    }
  }

  componentDidMount() {
    // Use string interpolation to get the id from the URL
    axios({
      method: 'GET',
      url: `/api/programs/${this.props.match.params.id}`
    })
    .then(data => {
      this.setState({
		program: data.data.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderProgram() {
    const program = this.state.program;
    if (this.state.dataLoaded) {
      return (
        <div>
          <p className="program name">{program.name}</p>
          <p className="program description">{program.description}</p>
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
      <div className="Program">
        <h3>Program details</h3>
        {this.renderProgram()}
        <Link to="/">Back to Programs</Link>
      </div>
    )
  }
};

export default Program;