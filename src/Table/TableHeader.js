import { Component } from "react";
import { Utils} from '../Utils/utils';

const VacationButton = (props) => {
    return <button>{props.value}</button>;
}

class TableHeader extends Component {
    constructor(props){
        super(props);
        // this.cells = [];
    }

    render(){
        this.month = Number.parseInt(this.props.currentDate.toLocaleDateString("en-US", { month: "numeric" }), 10);
        this.year = Number.parseInt(this.props.currentDate.toLocaleDateString("en-US", { year: "numeric" }), 10);
        this.countDays = Utils.getDaysInMonth(this.month, this.year);
        const cells = [];
        for(let cellNumber = 0; cellNumber < this.props.width; cellNumber++) {    
            if(!cellNumber) {
                cells.push(<th className = "cell cell-button" 
                    key = {cellNumber}>
                    <VacationButton value = "&#10011;Add Vacation"/>
                    </th>);
            } else if(cellNumber === this.props.width - 1) {
                cells.push(<th className = "cell cell-sum" key = {cellNumber}>Sum</th>)
            } else {
                const date = new Date(this.year, this.month - 1, cellNumber);
                const weekdayName = date.toLocaleDateString("en-US", { weekday: "short" });
                if (Utils.hiddenDays(cellNumber, this.countDays, this.props.width)) {
                    cells.push(<th className = "cell cell-day hidden" key = {cellNumber}> 
                        <span className="day">{weekdayName}</span>
                        <span className = "date">{cellNumber}</span> 
                        </th>);
                } else {
                    if (Utils.isWeekend(weekdayName)) {
                        cells.push(<th className = "cell cell-day weekend" key = {cellNumber}> 
                        <span className="day">{weekdayName}</span>
                        <span className = "date">{cellNumber}</span> 
                        </th>);
                    } else {
                        cells.push(<th className = "cell cell-day" key = {cellNumber}> 
                        <span className="day">{weekdayName}</span>
                        <span className = "date">{cellNumber}</span> 
                        </th>);
                    }
                }
            }
        }
        return cells;
    }
}

export default TableHeader;