
import Card from "./Card"

function WeeklyCards({ notes, days }) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let todayDate = new Date();
    let today = String(todayDate.getDate()).padStart(2, '0');
    return (
        <div className="w-full max-h-75 overflow-hidden overflow-y-scroll scrollbar-hide flex mt-5">
            {
                weekDays.map((day, index) => {
                    return (
                        <div key={index} className="w-1/6 h-full flex flex-col items-center justify-start">
                            <h1 className={`${today == days[index]?.getDate() ? 'font-semibold text-2xl text-gray-700' : 'font-medium text-2xl text-gray-500'}`}>{day} <p className="text-center text-base">{days[index]?.getDate()}</p></h1>
                            {
                                notes.hasOwnProperty(day) && notes.Monday.map(note => {
                                    return <Card key={note.id} cardContent={note.cardContent} time={note.hour} author={note.author} />
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
