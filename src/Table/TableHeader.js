import { Utils} from '../Utils/utils';
import PropTypes from "prop-types";


const VacationButton = (props) => {
    return <button onClick={()=>{props.setModalActive(true)}}>{props.value}</button>;
}

const TableHeader = ({days, currentDate, teams, setModalActive, width}) => {
    return(
        <tr>
            <th className = "cell cell-button">
                <VacationButton value = "&#10011;Add Vacation" setModalActive={setModalActive}/>
            </th>
            {days.map((day,i) => {
                return(
                    <th key = {i} className={Utils.hiddenDays(day, days, width) ? 'cell cell-day hidden' : (Utils.isWeekend(day.dayName) ? "cell cell-day weekend" : "cell cell-day")}> 
                        <span className="day">{day.dayName}</span>
                        <span className = "date">{day.date}</span> 
                        </th>
                )
            })}
            <th className = "cell cell-sum">Sum</th>

        </tr>

    )
}

export default TableHeader;

TableHeader.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object),
    teams: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.number,
}
