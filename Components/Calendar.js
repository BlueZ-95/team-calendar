import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";

function Calendar({ notes }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-self-start px-10">
            <CalendarHeader />
            <WeeklyCards />
        </div>
    )
}

export default Calendar
