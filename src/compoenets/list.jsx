
import React, { Component } from "react";
import Axios from 'axios'
export default class MoviesList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {movies: []};
    }
  
    async componentDidMount() {
      await this.MoviesList();
    }
  
    async MoviesList() {
        const result = await Axios.get('http://localhost:3001/movies');
        //console.log('Result:', result);
        this.setState({ movies: result.data.movies})
    }
  
    render() {
      const movies = this.state.movies.map((item, i) => (
        <div>
          <h1>{ item }</h1>
        </div>
      ));
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{ movies }</div>
        </div>
      );
    }
  }
























