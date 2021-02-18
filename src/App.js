import React, { Component } from "react";
import "./styles/index.scss";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentDate: new Date(), 
    }
  }

  callBackDate = (newDate) =>{
    //newDate = newDate.setMonth(d.getMonth() - 1);
    this.setState({currentDate: newDate});
  }
  
  render() {
    return (
      <div className="App">
        <Navigation callBackDate={this.callBackDate}></Navigation>
        <Table currentDate={this.state.currentDate}></Table>
      </div>
    );
  }
}

export default App;
