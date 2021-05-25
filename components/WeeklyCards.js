import Card from "./Card";
import { currentDate } from "../Utilities/date_time_utils";

function WeeklyCards({ notes, currentWeekDates, weekDays }) {

    return (
        <div className="w-full max-h-75 overflow-hidden overflow-y-scroll scrollbar-hide flex mt-5">
            {
                weekDays.map((day, index) => {
                    return (
                        <div key={index} className="w-1/6 h-full flex flex-col items-center justify-start">
                            <h1 className={`${currentDate == currentWeekDates[index] ? 'font-semibold text-2xl text-gray-700' : 'font-medium text-2xl text-gray-500'}`}>{day} <p className="text-center text-base">{currentWeekDates[index]}</p></h1>
                            {
                                notes.hasOwnProperty(day) && notes[day].map(note => {
                                    return <Card key={note.id} cardContent={note.cardContent} time={note.hour} author={note.author} duration={note.duration} />
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WeeklyCards
