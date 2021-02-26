import { Section } from "./Section";
import PropTypes from "prop-types";
import {React} from "react";


export function TableBody({teams, days, currentDate, width}) {

    return(
        teams.map((section) => <Section section ={section} key={section.name} days={days} currentDate={currentDate} width = {width}/>)
    );
}

TableBody.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object),
    teams: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.number,
    currentDate: PropTypes.object
}
