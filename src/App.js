import React, { Component } from "react";
import "./styles/index.scss";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";
import Modal from "./VacationModal/Modal"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        currentDate: new Date(),
        modalActive: true,
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.setModalActive = this.setModalActive.bind(this);
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

setModalActive(value){
  this.setState({modalActive: value})
}

  
  render() {
    return (
      <div className="App">
        {console.log("Active :: ", this.state.modalActive)}
        <Navigation currentDate={this.state.currentDate} prevMonth = {this.prevMonth} nextMonth = {this.nextMonth}></Navigation>
        <Table currentDate={this.state.currentDate} setModalActive={this.setModalActive}></Table>
        <Modal active={this.state.modalActive} setModalActive={this.setModalActive} />
      </div>
    );
  }
}

export default App;
