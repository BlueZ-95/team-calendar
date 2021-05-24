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

            // //Get current week dates
            // let currentDate = new Date();
            // let currentWeek = [];

            // for (let i = 1; i < 7; i++) {
            //     let first = currentDate.getDate() - currentDate.getDay() + i;
            //     let day = new Date(currentDate.setDate(first));
            //     currentWeek.push(day)
            // }

            setCurrentweekDates(currentWeekDays);
            //

        });
    }, []);

    const addNote = (e, selectedDay) => {
        e.preventDefault();

        const date = e.target.date.value;
        const cardContent = e.target.cardContent.value;

        const userDetails = JSON.parse(localStorage.getItem('userDetails')).userDetails;
        const author = userDetails.userName;

        const day = weekDays[selectedDay];
        const hour = e.target.hour.value;
        const duration = e.target.duration.value;

        const month = currentMonth;

        let enableAddCard = true;

        console.log('Booked Slots', bookedSlots);
        //check if slot is booked
        bookedSlots[day].forEach(slots => {
            for (let i = 0; i < slots.duration; i++) {

                //If slot time is after 12:00 set it from 1:00
                slots.hour = slots.hour > 12 ? 1 : slots.hour;
                if (slots.hour + i == hour) {
                    alert('You already assigned a task at this time slot');
                    enableAddCard = false;
                    break;
                }
            }
        });

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

            var _notes = { ...notes };
            if (!_notes.hasOwnProperty(weekDays[selectedDay])) {
                _notes[weekDays[selectedDay]] = new Array();
            }

            _notes[weekDays[selectedDay]].push({
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
