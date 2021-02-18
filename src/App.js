import React, { Component } from "react";
import "./styles/index.scss";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        currentDate: new Date() 
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
}


prevMonth() {
    this.setState(() => {
        return {
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() - 1, 1)
        }
    });
}

nextMonth() {
    this.setState(() => {
        return {
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 1)
        }
    });
}
  // callBackDate = (newDate) =>{
  //   //newDate = newDate.setMonth(d.getMonth() - 1);
  //   this.setState({currentDate: newDate});
  // }
  
  render() {
    return (
      <div className="App">
        <Navigation currentDate={this.state.currentDate} prevMonth = {this.prevMonth} nextMonth = {this.nextMonth}></Navigation>
        <Table currentDate={this.state.currentDate}></Table>
      </div>
    );
  }
}

export default App;
