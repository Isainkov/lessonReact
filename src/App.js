import {Component, React} from 'react';
import "./styles/index.scss";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";
import Modal from "./VacationModal/Modal";
// import { calendarFetchHandler } from "./API/api";
import { Utils } from "./Utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        currentDate: new Date(),
        modalActive: false,
        width: 33,
        teams: null
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.setModalActive = this.setModalActive.bind(this);
    this.fetchCalendar = this.fetchCalendar.bind(this);
}

fetchCalendar() {
  const departmentTeams = {
    teams: [
      {
        name: "Frontend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            name: "FE_Team_User1",
            vacations: [
              {startDate: "20.02.2021", endDate: "25.02.2021", type: "Paid"},
              {startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid"},
            ],
          },
          {
            name: "FE_Team_User2",
            vacations: [
              {startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid"},
              {startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid"},
            ],
          },
        ],
      },
      {
        name: "Backend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            name: "BE_Team_User1",
            vacations: [
              {startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid"},
              {startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid"},
            ],
          },
          {
            name: "BE_Team_User2",
            vacations: [
              {startDate: "20.02.2021", endDate: "22.02.2021", type: "Paid"},
              {startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid"},
            ],
          },
        ],
      },
    ],
  };
  return fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(departmentTeams),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      this.setState({teams: json.teams});
    }).catch(err => console.log(err));
}

componentDidMount() {
  this.fetchCalendar();
}

prevMonth = () => {
    this.setState({
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() - 1, 1)
    });
    this.getDaysOfActivePeriod();
}

nextMonth = () => {
    this.setState({
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 1)
    });
    this.getDaysOfActivePeriod();

}

setModalActive = (value) => {
  this.setState({modalActive: value})
}

getDaysOfActivePeriod() {
  const year = this.state.currentDate.getFullYear();
  const month = this.state.currentDate.getMonth();
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    const item = new Date(date);
    days.push({
      dayName: item.toLocaleDateString("en-US", {weekday: "short"}),
      date: item.getDate(),
      isDayOff: Utils.isWeekend(item),
      fullDate: item,
    });
    date.setDate(date.getDate() + 1);
  }
  return days
}

// getCurrentPeriod = () => {
//   const month = Number.parseInt(this.state.currentDate.toLocaleDateString("en-US", { month: "numeric" }), 10);
//   const year = Number.parseInt(this.state.currentDate.toLocaleDateString("en-US", { year: "numeric" }), 10);
//   const countDays = Utils.getDaysInMonth(month, year);
//   const cells = [];
//   const date = new Date(year, month, 1);
//   while (cells.length !== countDays){
//     const item = new Date(date);
//     cells.push({
//       weekdayName: item.toLocaleDateString("en-US", { weekday: "short" }),
//       // hiddenDay: Utils.hiddenDays(item),
//       weekendDay: Utils.isWeekend(item)
//     });
//   }
//   return cells;

// }

  render() {
    return (
      <div className="App">
        <Navigation currentDate={this.state.currentDate} prevMonth = {this.prevMonth} nextMonth = {this.nextMonth}></Navigation>
        {this.state.teams
        ? <Table allDays={this.getDaysOfActivePeriod()} teams={this.state.teams} currentDate={this.state.currentDate}
        setModalActive={this.setModalActive}
        />
        : ''
      }
         <Modal active={this.state.modalActive} setModalActive={this.setModalActive} />
      </div>
    );
  }
}

export default App;
