import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// TODO - make this page nicer
class Section extends Component {
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
      url: `/api/sections/${this.props.match.params.id}`
    })
      .then(data => {
        this.setState({
          section: data.data.data,
          dataLoaded: true
        })
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
          <h1 className="section name">{section.name}</h1>
          <p className="section description">{section.description}</p>
          <img class="card-img-top" 
            width="100%"
            height="225"
            src={`${section.image_url}`}/>
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
    console.log(`program id ${this.props.match.params.id}`)
    return (
      <div className="Section">
        {this.renderSection()}
        <Link to="/">Back to Programs</Link>
      </div>
    )
  }
}

export default Section;