import {Component, React} from 'react';
import "./styles/index.scss";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";
import Modal from "./VacationModal/Modal";
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
    this.calendarFetchHendler = this.calendarFetchHendler.bind(this);
}

calendarFetchHendler() {
  const departmentTeams = {
    teams: [
      {
        id: 1,
        name: "Frontend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            id: 1,
            name: "FE_Team_User1",
            vacations: [
              {
                startDate: "01.02.2021",
                endDate: "04.02.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 2,
            name: "FE_Team_User2",
            vacations: [
              {
                startDate: "02.02.2021",
                endDate: "02.02.2021",
                type: "Paid",
              },
              {
                startDate: "10.02.2020",
                endDate: "16.02.2020",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 3,
            name: "FE_Team_User3",
            vacations: [
              {
                startDate: "16.02.2021",
                endDate: "20.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "10.03.2020",
                endDate: "16.03.2020",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 4,
            name: "FE_Team_User4",
            vacations: [
              {
                startDate: "23.02.2021",
                endDate: "27.02.2021",
                type: "Paid",
              },
              {
                startDate: "10.03.2020",
                endDate: "16.03.2020",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 5,
            name: "FE_Team_User5",
            vacations: [
              {
                startDate: "08.02.2021",
                endDate: "11.02.2021",
                type: "Paid",
              },
              {
                startDate: "10.03.2021",
                endDate: "16.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 6,
            name: "FE_Team_User6",
            vacations: [
              {
                startDate: "02.10.2021",
                endDate: "04.10.2021",
                type: "Paid",
              },
              {
                startDate: "10.03.2021",
                endDate: "16.03.2021",
                type: "UnPaid",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Designers",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            id: 1,
            name: "Des_Team_User1",
            vacations: [
              {
                startDate: "01.10.2021",
                endDate: "04.10.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 2,
            name: "Des_Team_User2",
            vacations: [
              {
                startDate: "02.02.2021",
                endDate: "05.02.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 3,
            name: "Des_Team_User3",
            vacations: [
              {
                startDate: "23.02.2021",
                endDate: "27.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 4,
            name: "Des_Team_User4",
            vacations: [
              {
                startDate: "03.02.2021",
                endDate: "05.02.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 5,
            name: "Des_Team_User5",
            vacations: [
              {
                startDate: "08.02.2021",
                endDate: "13.02.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 6,
            name: "Des_Team_User1",
            vacations: [
              {
                startDate: "01.04.2021",
                endDate: "04.04.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
        ],
      },
      {
        id:3,
        name: "Backend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            id: 1,
            name: "BE_Team_User1",
            vacations: [
              {
                startDate: "15.02.2021",
                endDate: "22.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 2,
            name: "BE_Team_User2",
            vacations: [
              {
                startDate: "08.02.2021",
                endDate: "13.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 3,
            name: "BE_Team_User3",
            vacations: [
              {
                startDate: "16.02.2021",
                endDate: "17.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 4,
            name: "BE_Team_User4",
            vacations: [
              {
                startDate: "12.02.2021",
                endDate: "13.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 5,
            name: "BE_Team_User5",
            vacations: [
              {
                startDate: "15.02.2021",
                endDate: "22.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
          {
            id: 6,
            name: "BE_Team_User6",
            vacations: [
              {
                startDate: "01.02.2021",
                endDate: "05.02.2021",
                type: "UnPaid",
              },
              {
                startDate: "20.03.2021",
                endDate: "22.03.2021",
                type: "UnPaid",
              },
            ],
          },
        ],
      },
      {
        id:4,
        name: "Managers",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            id: 1,
            name: "Man_Team_User1",
            vacations: [
              {
                startDate: "08.01.2021",
                endDate: "10.01.2021",
                type: "Paid",
              },
              
              {
                startDate: "20.11.2021",
                endDate: "22.11.2021",
                type: "Paid",
              },
            ],
          },
          {
            id: 2,
            name: "Man_Team_User2",
            vacations: [
              {
                startDate: "08.01.2021",
                endDate: "12.01.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2021",
                endDate: "22.11.2021",
                type: "Paid",
              },
            ],
          },
          {
            id: 3,
            name: "Man_Team_User3",
            vacations: [
              {
                startDate: "08.02.2021",
                endDate: "20.02.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 4,
            name: "Man_Team_User4",
            vacations: [
              {
                startDate: "08.05.2021",
                endDate: "20.05.2021",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 5,
            name: "Man_Team_User5",
            vacations: [
              {
                startDate: "08.05.2020",
                endDate: "20.05.2020",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
            ],
          },
          {
            id: 6,
            name: "Man_Team_User",
            vacations: [
              {
                startDate: "08.05.2020",
                endDate: "20.05.2020",
                type: "Paid",
              },
              {
                startDate: "20.11.2020",
                endDate: "22.11.2020",
                type: "Paid",
              },
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
  this.calendarFetchHendler();
}

prevMonth = () => {
    this.setState({
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() - 1, 1)
    });
    this.getActiveDays();
}

nextMonth = () => {
    this.setState({
            currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 1)
    });
    this.getActiveDays();

}

setModalActive = (value) => {
  this.setState({modalActive: value})
}

getActiveDays() {
  const year = this.state.currentDate.getFullYear();
  const month = this.state.currentDate.getMonth();
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    const result = new Date(date);
    days.push({
      dayName: result.toLocaleDateString("en-US", {weekday: "short"}),
      date: result.getDate(),
      isDayOff: Utils.isWeekend(result),
      fullDate: result,
    });
    date.setDate(date.getDate() + 1);
  }
  return days
}


  render() {
    return (
      <div className="App">
        <Navigation currentDate={this.state.currentDate} prevMonth = {this.prevMonth} nextMonth = {this.nextMonth}></Navigation>
        {this.state.teams ? <Table days={this.getActiveDays()} teams={this.state.teams} currentDate={this.state.currentDate} setModalActive={this.setModalActive}/> : ''}
         <Modal active={this.state.modalActive} setModalActive={this.setModalActive} />
      </div>
    );
  }
}

export default App;
