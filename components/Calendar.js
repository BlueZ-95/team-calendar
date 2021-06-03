import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";
import { firestore } from "../Utilities/firebase";
import { useEffect, useState } from "react";
import { weekDays, currentMonth, currentWeekDays } from "../Utilities/date_time_utils";

function Calendar() {

    const [notes, setNotes] = useState({});
    const [currentweekDates, setCurrentweekDates] = useState([]);
    const [bookedSlots, setBookedSlots] = useState({});
    const [isMyCardsFilterEnabled, setIsMyCardsFilterEnabled] = useState(false);

    let _bookedSlots = {
        'Monday': [],
        'Tuesday': [],
        'Wednesday': [],
        'Thursday': [],
        'Friday': [],
        'Saturday': []
    }

    useEffect(() => {
        if (Object.keys(notes).length === 0) {
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
                        _bookedSlots[data.day] = setBookedSlotsArray(_bookedSlots[data.day], parseInt(data.hour), parseInt(data.duration))
                    }

                    console.log('useEffect', _bookedSlots);
                    notes[data.day].push(data);
                });

                setBookedSlots(_bookedSlots);
                setNotes(notes);
                setCurrentweekDates(currentWeekDays);
            });
        }
    }, [notes]);

    const addNote = (e, cardValues) => {
        e.preventDefault();

        const date = cardValues.date;
        const cardContent = cardValues.cardContent;

        const userDetails = JSON.parse(localStorage.getItem('userDetails')).userDetails;
        const author = userDetails.userName;

        const day = weekDays[currentWeekDays.indexOf(parseInt(cardValues.date))];
        const hour = parseInt(cardValues.hour);
        const duration = cardValues.duration;

        const month = currentMonth;

        //check if slot is booked
        if (bookedSlots[day].length > 0) {
            for (let i = 0; i < duration; i++) {
                let hourToAdd = hour + i;
                hourToAdd = hourToAdd > 12 ? hourToAdd - 12 : hourToAdd;
                if (bookedSlots[day].indexOf(hourToAdd) == -1) {
                    alert('You already assigned a task at this time slot');
                    return;
                }
            }
        }

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
            _bookedSlots[day] = setBookedSlotsArray(_bookedSlots[day], parseInt(hour), parseInt(duration));

            setBookedSlots({ ..._bookedSlots });
            setNotes({ ..._notes });

        }).catch(err => {
            console.log(err);
        });
    }

    function setBookedSlotsArray(day, hour, duration) {
        for (let i = 0; i < duration; i++) {
            console.log('iteration ' + i, day, hour, duration);
            let hourToAdd = hour + i;
            hourToAdd = hourToAdd > 12 ? hourToAdd - 12 : hourToAdd;
            day.push(hourToAdd);
        }
        console.log('loop', duration, day);
        return day;
    }

    const toggleOnlyMyCards = (toggleOnlyMyCards) => {
        setIsMyCardsFilterEnabled(toggleOnlyMyCards)
    }

    return (
        <div className="w-full h-full min-h-75 flex flex-col items-center justify-self-start px-10">
            <CalendarHeader addNote={addNote} currentWeekDates={currentweekDates} isMyCardsFilterEnabled={isMyCardsFilterEnabled} toggleOnlyMyCards={toggleOnlyMyCards} />
            <WeeklyCards notes={notes} currentWeekDates={currentweekDates} weekDays={weekDays} isMyCardsFilterEnabled={isMyCardsFilterEnabled} />
        </div>
    )
}

export default Calendar
