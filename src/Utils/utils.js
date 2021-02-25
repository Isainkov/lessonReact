export class Utils {
    static isWeekend(date) {
      if (date === "Sun" || date === "Sat") {
        return true;
      }
      return false;
    }
  
    static getDaysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
  
    static hiddenDays(cellNumber, daysInMonth, allCells) {
      if (cellNumber > daysInMonth && cellNumber < allCells) {
        return true;
      }
      return false;
    }
  }

  function checkVacationsDate(vacations, date) {
    let result = false;
    vacations.forEach((item) => {
        const startDateNumbers = item.startDate.split(".");
        const startDate = `${startDateNumbers[2]}/${startDateNumbers[1]}/${startDateNumbers[0]}`;
        const endDateNumbers = item.endDate.split(".");
        const endDate = `${endDateNumbers[2]}/${endDateNumbers[1]}/${endDateNumbers[0]}`;
        const vacation = item.endDate + 1 - item.startDate;
        if (date >= new Date(startDate) && date <= new Date(endDate)) {
            result = <div className = {date.type === "Paid" ? "paid-day" : "unpaid-day"} style = {{
                                          width: `${vacation * 35 + vacation - 2}px`,
                                          position: 'absolute'
                                      }}>Pd</div>;
        }
    });
    return result;
}


export default checkVacationsDate