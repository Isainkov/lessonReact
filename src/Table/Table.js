import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        year: this.props.currentDate.getFullYear(),
        month: this.props.currentDate.getMonth(),
    };
    this.countDays = null;
  }

  calculateCountDays(){
    this.countDays = new Date(this.state.year, this.state.month + 1, 0).getDate();
  }



  render() {
      this.calculateCountDays();
      console.log(this.countDays);
    return (
      <React.Fragment>
        {/* <TableHeader month={this.props.month} year={this.props.year} countDays={countDays} /> */}
        {/* <TableBody month={this.props.month} year={this.props.year} countDays={countDays} /> */}
      </React.Fragment>
    );
  }
}
