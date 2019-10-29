import React, { Component } from "react";
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList';
import { getSmurfs, postSmurfs } from '../actions';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: "",
      age: "",
      height: ""
    }
  }

  
  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props,"from component did mount");
   
  }

 handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const adding = {
      age: this.state.age,
      name: this.state.name,
      height: this.state.height
    }

    this.props.postSmurfs(adding);
}


  render() {
    let list;
    if(this.props.smurfs){
     list =  <SmurfsList characters={this.props.smurfs}/>
    }
    
      return (
        <div className="App">
          <h1>SMURFS</h1>
          {list}
          <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
  
  
      
         
         
         
        </div>
      );
    
  }
}

const mapStateToProps = state => {
  console.log(state,"what is state");
return{
  smurfs: state.smurfs
  }
};

export default connect(mapStateToProps,{getSmurfs, postSmurfs})(App);
