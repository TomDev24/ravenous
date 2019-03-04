import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList"
import SearchBar from "./components/SearchBar/SearchBar"
import Yelp from "./util/Yelp"



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      businesses: [],
      errorMessage: ""
    };
    this.searchYelp=this.searchYelp.bind(this)
    this.errorMessage=this.errorMessage.bind(this)
  }
  searchYelp(term,location,sortBy){
    Yelp.search(term, location, sortBy).then( busArray=>{
       console.log(busArray)
       if (typeof(busArray)==="undefined"){
          this.errorMessage()
       }else {
        this.setState({
          businesses: busArray

        })
      }
    })
  }

  errorMessage(){
    this.setState({
      errorMessage: "Something went wrong, try again please",
    })

  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
        <div className="error">{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default App;
