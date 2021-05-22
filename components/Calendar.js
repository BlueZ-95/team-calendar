import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";
import { firestore } from "../Utilities/firebase";
import { useEffect, useState } from "react";

function Calendar() {

    const [notes, setNotes] = useState({});
    const [currentweekDates, setCurrentweekDates] = useState([]);

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    useEffect(() => {
        let notes = {};
        firestore.collection('notes').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var data = doc.data();

                data['id'] = doc.id;

                // check if day is already added in dictionary
                if (!notes.hasOwnProperty(weekDays[data.day])) {
                    notes[weekDays[data.day]] = new Array();
                    console.log(notes);
                }
                notes[weekDays[data.day]].push(data);
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

            setCurrentweekDates(currentWeek);
            //

        });
    }, []);

    const addNote = (e, selectedDay) => {
        e.preventDefault();

        const date = e.target.date.value;
        const cardContent = e.target.cardContent.value;

        const userDetails = JSON.parse(localStorage.getItem('userDetails')).userDetails;
        const author = userDetails.userName;
        const email = userDetails.email;

        const day = selectedDay;

        const hour = e.target.hour.value;

        var today = new Date();

        const month = today.getMonth() + 1;

        firestore.collection('notes').add({
            author: author,
            cardContent: cardContent,
            date: date,
            day: day,
            hour: hour,
            month: month,
        }).then(res => {

            var _notes = { ...notes };
            if (!_notes.hasOwnProperty(weekDays[day])) {
                _notes[weekDays[day]] = new Array();
            }

            _notes[weekDays[day]].push({
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
            <CalendarHeader addNote={addNote} currentWeekDates={currentweekDates} />
            <WeeklyCards notes={notes} currentWeekDates={currentweekDates} weekDays={weekDays} />
        </div>
    )
}

export default Calendar
