import CalendarHeader from "./CalendarHeader";
import WeeklyCards from "./WeeklyCards";
import firestore from "../Utilities/firebase";
import { useEffect, useState } from "react";
import Router from "next/router";

function Calendar() {

    const [notes, setNotes] = useState({});

    useEffect(() => {
        let notes = {};
        firestore.collection('notes').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var data = doc.data();

                // check if day is already added in dictionary
                if(!notes.hasOwnProperty(data.day)) {
                    notes[data.day] = new Array();
                }
                    
                notes[data.day].push(data);
            });
            
            setNotes(notes);
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
            // console.log('in then');
            // var _notes = notes;
            // if(!_notes.hasOwnProperty(day)) {
            //     _notes[day] = new Array();
            // }
            
            // _notes[day].push({
            //     author: author,
            //     cardContent: cardContent,
            //     date: date,
            //     day: day,
            //     hour: hour,
            //     month: month
            // });

            // setNotes(_notes);
            Router.reload();

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-self-start px-10">
            <CalendarHeader addNote={addNote} />
            <WeeklyCards notes={notes} />
        </div>
    )
}

export default Calendar
