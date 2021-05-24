import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";
import { firestore } from "../Utilities/firebase";
import { useEffect, useState } from "react";
import { weekDays, currentMonth, currentWeekDays, currentDay } from "../Utilities/date_time_utils";

function Calendar() {

    const [notes, setNotes] = useState({});
    const [currentweekDates, setCurrentweekDates] = useState([]);
    const [bookedSlots, setBookedSlots] = useState({})

    //let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let _bookedSlots = {
        'Monday': [],
        'Tuesday': [],
        'Wednesday': [],
        'Thursday': [],
        'Friday': [],
        'Saturday': []
    }

    useEffect(() => {
        let notes = {};
        firestore.collection('notes').where('month', '==', currentMonth).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var data = doc.data();

                data['id'] = doc.id;

                // check if day is already added in dictionary
                if (!notes.hasOwnProperty(data.day)) {
                    notes[data.day] = new Array();
                }

                //set booked slots
                if (JSON.parse(localStorage.getItem('userDetails')).userDetails.userName == data.author) {
                    _bookedSlots[data.day].push({ 'hour': parseInt(data.hour), 'duration': parseInt(data.duration) });
                }

                notes[data.day].push(data);
            });
            setBookedSlots(_bookedSlots);
            setNotes(notes);

            setCurrentweekDates(currentWeekDays);
            //

        });
    }, []);

    const addNote = (e, cardValues) => {
        e.preventDefault();
        console.log(cardValues);
        const date = cardValues.date;
        const cardContent = cardValues.cardContent;

        const userDetails = JSON.parse(localStorage.getItem('userDetails')).userDetails;
        const author = userDetails.userName;

        const day = weekDays[currentWeekDays.indexOf(parseInt(cardValues.date))];
        const hour = cardValues.hour;
        const duration = cardValues.duration;

        const month = currentMonth;

        let enableAddCard = true;
        console.log(bookedSlots);
        console.log(day);
        //check if slot is booked
        bookedSlots[day].forEach(slots => {
            for (let i = 0; i < slots.duration; i++) {
                slots.hour += i;
                //If slot time is after 12:00 set it from 1:00
                slots.hour = slots.hour > 12 ? 1 : slots.hour;
                console.log(slots.hour, i);
                if (slots.hour == hour) {
                    alert('You already assigned a task at this time slot');
                    enableAddCard = false;
                    break;
                }
            }
        });

        console.log();

        console.log('Booked Slot on ' + day, bookedSlots[day]);

        if (!enableAddCard)
            return;

        firestore.collection('notes').add({
            author: author,
            cardContent: cardContent,
            date: date,
            day: day,
            hour: hour,
            month: month,
            duration: duration
        }).then(res => {

            var _notes = notes;
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
                month: month,
                duration: duration
            });

            //Update booked slot
            let _bookedSlots = bookedSlots;
            _bookedSlots[day].push({ 'hour': parseInt(hour), 'duration': parseInt(duration) });

            setBookedSlots({ ..._bookedSlots });

            setNotes({ ..._notes });

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
