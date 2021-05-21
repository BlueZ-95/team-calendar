import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";
import { firestore } from "../Utilities/firebase";
import { useEffect, useState } from "react";

function Calendar() {

    const [notes, setNotes] = useState({});
    const [weekDays, setWeekDays] = useState([]);

    useEffect(() => {
        let notes = {};
        firestore.collection('notes').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var data = doc.data();

                data['id'] = doc.id;

                // check if day is already added in dictionary
                if (!notes.hasOwnProperty(data.day)) {
                    notes[data.day] = new Array();
                }

                notes[data.day].push(data);
            });

            setNotes(notes);

            //Get current week dates
            let currDate = new Date();
            let currentWeek = [];

            for (let i = 1; i < 7; i++) {
                let first = currDate.getDate() - currDate.getDay() + i;
                let day = new Date(currDate.setDate(first));
                currentWeek.push(day)
            }

            setWeekDays(currentWeek);
            //

        });
    }, []);

    const addNote = e => {
        e.preventDefault();

        const author = e.target.author.value;
        const cardContent = e.target.cardContent.value;
        const date = e.target.date.value;
        const day = e.target.day.value;
        const hour = e.target.hour.value;
        const month = e.target.month.value;

        firestore.collection('notes').add({
            author: author,
            cardContent: cardContent,
            date: date,
            day: day,
            hour: hour,
            month: month,
        }).then(res => {
            console.log(res.id);

            var _notes = { ...notes };
            if (!_notes.hasOwnProperty(day)) {
                _notes[day] = new Array();
            }

            _notes[day].push({
                id: res.id,
                author: author,
                cardContent: cardContent,
                date: date,
                day: day,
                hour: hour,
                month: month
            });

            setNotes(_notes);

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="w-full h-full min-h-75 flex flex-col items-center justify-self-start px-10">
            <CalendarHeader addNote={addNote} days={weekDays} />
            <WeeklyCards notes={notes} days={weekDays} />
        </div>
    )
}

export default Calendar
