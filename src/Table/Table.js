import React from "react";
import TableHeader from './TableHeader';
import {TableBody} from './TableBody';
import PropTypes from "prop-types";


const Table = ({days, currentDate, teams, setModalActive, width}) => {
  return ( <table>
        <thead>
          <TableHeader days={days} currentDate = {currentDate} teams={teams} setModalActive={setModalActive} width = {width} ></TableHeader>
        </thead>
        <tbody>
          <TableBody days={days} currentDate = {currentDate} teams={teams} width = {width}></TableBody>
        </tbody>
      </table>
  )  
}

export default Table;

Table.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object),
  teams: PropTypes.arrayOf(PropTypes.object),
  currentDate: PropTypes.object,
  width: PropTypes.number,
}