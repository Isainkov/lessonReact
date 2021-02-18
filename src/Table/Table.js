import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
  }

  render() {
    console.log("Table render() :: ", this.props.currentDate.getMonth());
    return (
      <React.Fragment>
        {/* <TableHeader month={this.props.month} year={this.props.year} countDays={countDays} /> */}
        {/* <TableBody month={this.props.month} year={this.props.year} countDays={countDays} /> */}
      </React.Fragment>
    );
  }
}
