import {React, useState} from "react";
import PropTypes from "prop-types";
import {Utils} from '../Utils/utils';
import isVacation from '../Utils/utils'


export const Section = ({section, currentDate, days, width}) => {
    const [isMembersShown, setIsMembersShown] = useState(true);

    const toggleHandler = () => {
        setIsMembersShown((previous)=> !previous);
    };
    return (
        <>        
            <tr className={`department ${section.name.split(" ").join("-")}`}>
                <td className='cell team'>
                <div className = "border-bottom"></div>

                    <div className="team__info">
                        <span className="team__name">{section.name}</span>
                  <span className="team__count-members">{section.members.length}</span>
                        <span className="team__percentage-absent">{section.percentageOfAbsent[currentDate.getMonth()]}%</span>
                        <span className="team__btn--hide" onClick={toggleHandler} style={{transform: isMembersShown ? "" : "rotate(180deg)"}}>
                        </span>
                    </div>
                </td>
                {days.map((day, i) => {
                        return <td key={i} className={Utils.hiddenDays(day, days, width) ? 'cell cell-day hidden' : (Utils.isWeekend(day.dayName) ? "cell cell-day weekend" : "cell cell-day")}>
                        </td>
                        
                    }
                )}
            <td className = "cell cell-sum" />

            </tr>
            {section.members.map(((member, i) => {
                return <tr key={i} style={{display: isMembersShown ? "table-row" : "none"}} className = {section.name.split(" ").join("-")}>
                    <td className='cell team'>
                       {member.name}
                       <div className = "border-bottom"></div>

                    </td>
                    
                    {days.map((day,i) => {
                return(
                    <td key = {i} className={`${Utils.hiddenDays(day, days, width) ? 'cell cell-day hidden' : (Utils.isWeekend(day.dayName) ? "cell cell-day weekend" : "cell cell-day")}`}> 
                        { isVacation(member.vacations, day.fullDate, day)}
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

Section.propTypes = {
    section: PropTypes.shape({
        name:PropTypes.string,
        members: PropTypes.arrayOf(PropTypes.object),
        percentageOfAbsent: PropTypes.arrayOf(PropTypes.number)
    }).isRequired,
    days: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentDate: PropTypes.object.isRequired
}
