import React, { Component } from "react";
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Utils} from '../Utils/utils';


// class Table extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       width: 33,
//       // month: '',
//       // year: '',
//       // countDays: ''
//     };
//     this.month = Number.parseInt(this.props.currentDate.toLocaleDateString("en-US", { month: "numeric" }), 10);
//     this.year = Number.parseInt(this.props.currentDate.toLocaleDateString("en-US", { year: "numeric" }), 10);
//     this.countDays = Utils.getDaysInMonth(this.month, this.year);
//   }

//   render() {
//     console.log("Table render() :: ", this.props.currentDate.getMonth());
//     return (
//       <React.Fragment>
//         <table>
//         <TableHeader currentDate = {this.props.currentDate} month={this.props.month} year={this.props.year} width = {this.state.width} setModalActive={this.props.setModalActive}></TableHeader>
//            <TableBody currentDate = {this.props.currentDate} month={this.props.month} year={this.props.year} width = {this.state.width}></TableBody>

//         </table>
//         {/* <TableHeader month={this.props.month} year={this.props.year} countDays={countDays} /> */}
//         {/* <TableBody month={this.props.month} year={this.props.year} countDays={countDays} /> */}
//       </React.Fragment>
//     );
//   }
// }

const Table = ({allDays, currentDate, teams, setModalActive, width}) => {
  return(
      <table>
        <thead>
          <TableHeader allDays={allDays} currentDate = {currentDate} teams={teams} setModalActive={setModalActive} width = {width} ></TableHeader>
        </thead>
        <tbody>
          <TableBody allDays={allDays} currentDate = {currentDate} teams={teams} setModalActive={setModalActive} width = {width}></TableBody>
        </tbody>
      </table>

  )
}

export default Table;