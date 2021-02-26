 const Navigation = ({currentDate, prevMonth, nextMonth}) => {
    return (
        <div className="navigation">
            <div className="btn prev-btn" onClick={prevMonth}></div>
            <span className="display-date">{currentDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
            })}</span>
            <div className="btn next-btn" onClick={nextMonth}></div>
        </div>
    );
}

export default Navigation;