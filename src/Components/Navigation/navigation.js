import {Component} from 'react';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentDate: new Date(),
        };
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    prevMonth() {
        this.setState((state) => {
            return {
                currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), 0),
            }
        });
    }

    nextMonth() {
        this.setState((state) => {
            return {
                currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 1),
            }
        });
    }

    render() {
        return (
            <div className="calendarBar">
                <div className="btn prev-btn" onClick={this.prevMonth}></div>
                <span className="display-date">{this.state.currentDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                })}</span>
                <div className="btn next-btn" onClick={this.nextMonth}></div>
            </div>
        )
    }

}

export default Navigation;