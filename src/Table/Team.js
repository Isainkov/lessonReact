import teamIcon from "../images/groups.svg";
import toggleIcon from "../images/arrowUp.svg";
import {React, useState} from "react";
import PropTypes from "prop-types";
import {Utils} from '../Utils/utils';
import checkVacationsDate from '../Utils/utils'


export const Team = ({team, currentDate, allDays, width}) => {
    const [isTeamsMembersShown, setIsTeamsMembersShown] = useState(true);

    const toggleHandler = () => {
        setIsTeamsMembersShown((prev)=> !prev);
    };
    return (
        <>
        {/* <div className = "border-top"></div> */}
        
            <tr className={`department ${team.name.split(" ").join("-")}`}>
                <td className='cell team'>
                <div className = "border-bottom"></div>

                    <div className="team__info">
                        <span className="team__name">{team.name}</span>
                  <span className="team__count-members">{team.members.length}</span>
                        <span className="team__percentage-absent">{team.percentageOfAbsent[currentDate.getMonth()]}%</span>
                        <span className="team__btn--hide" onClick={toggleHandler} style={{transform: isTeamsMembersShown ? "none" : "rotate(180deg)"}}>
                        </span>
                    </div>
                </td>
                {allDays.map((day, i) => {
                        return <td key={i} className={Utils.hiddenDays(day, allDays, width) ? 'cell cell-day hidden' : (Utils.isWeekend(day.dayName) ? "cell cell-day weekend" : "cell cell-day")}>
                        </td>
                        
                    }
                )}
            <td className = "cell cell-sum" />

            </tr>
            {team.members.map(((member, i) => {
                return <tr key={i} style={{display: isTeamsMembersShown ? "table-row" : "none"}} className = {team.name.split(" ").join("-")}>
                    <td className='cell team'>
                       {member.name}
                       <div className = "border-bottom"></div>

                    </td>
                    
                    {allDays.map((day,i) => {
                return(
                    <td key = {i} className={`${Utils.hiddenDays(day, allDays, width) ? 'cell cell-day hidden' : (Utils.isWeekend(day.dayName) ? "cell cell-day weekend" : "cell cell-day")} ${
                        checkVacationsDate(member.vacations, day.fullDate) ? `Paid ${team.name.split(" ").join("-")}` : ''
                    }`}> 
                        </td>
                )
            })}
            <td className = "cell cell-sum" />

                </tr>
            }))}
            <div className='last-row'></div>
        </>
    );
};

Team.propTypes = {
    team: PropTypes.shape({
        name:PropTypes.string,
        members: PropTypes.arrayOf(PropTypes.object),
        percentageOfAbsent: PropTypes.arrayOf(PropTypes.number)
    }).isRequired,
    allDays: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentDate: PropTypes.object.isRequired
}
