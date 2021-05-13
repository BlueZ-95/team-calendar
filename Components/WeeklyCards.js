
import Card from "./Card"

function WeeklyCards({ notes }) {

    //Get current week dates
    let currDate = new Date();
    let currentWeek = [];

    for (let i = 1; i < 7; i++) {
        let first = currDate.getDate() - currDate.getDay() + i;
        let day = new Date(currDate.setDate(first));
        currentWeek.push(day)
    }
    //


    return (
        <div className="w-full flex mt-5 overflow-hidden">
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Monday <p className="text-center text-base">{currentWeek[0].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Monday') && notes.Monday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Tuesday <p className="text-center text-base">{currentWeek[1].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Tuesday') && notes.Tuesday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Wednesday <p className="text-center text-base">{currentWeek[2].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Wednesday') && notes.Wednesday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Thursday <p className="text-center text-base">{currentWeek[3].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Thursday') && notes.Thursday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Friday <p className="text-center text-base">{currentWeek[4].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Friday') && notes.Friday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Saturday <p className="text-center text-base">{currentWeek[5].getDate()}</p></h1>
                {
                    notes.hasOwnProperty('Saturday') && notes.Saturday.map(note => {
                        return <Card key={note.id} cardContent={note.cardContent} time={note.hour} />
                    })
                }
            </div>
        </div>
    )
}

export default WeeklyCards
