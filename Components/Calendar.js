import CalendarHeader from "./CalendarHeader";
import WeekCalendar from "./WeekCalendar";

function Calendar() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-self-start">
            <CalendarHeader />
            <WeekCalendar />
        </div>
    )
}

export default Calendar
