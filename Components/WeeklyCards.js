import { useEffect, useState } from "react"
import Card from "./Card"
import firestore from "../Utilities/firebase"

function WeeklyCards() {

    const [notes, setNotes] = useState({});

    useEffect(() => {
        let notes = {};
        firestore.collection('notes').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var data = doc.data();
            
                if(!notes.hasOwnProperty(data.day)) {
                    notes[data.day] = new Array();
                }
                    
                notes[data.day].push(data);
            });
            
            setNotes(notes);
        });
    }, []);

    return (
        <div className="w-full flex mt-5 overflow-hidden">
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Monday</h1>
                {
                    notes.hasOwnProperty('Moday') && notes.Moday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Tuesday</h1>
                {
                    notes.hasOwnProperty('Tuesday') && notes.Tuesday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Wednesday</h1>
                {
                    notes.hasOwnProperty('Wednesday') && notes.Wednesday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Thursday</h1>
                {
                    notes.hasOwnProperty('Thursday') && notes.Thursday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1 className="font-medium text-2xl text-gray-400">Friday</h1>
                {
                    notes.hasOwnProperty('Friday') && notes.Friday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
            <div className="w-1/6 h-full flex flex-col items-center justify-start">
                <h1  className="font-medium text-2xl text-gray-400">Saturday</h1>
                {
                    notes.hasOwnProperty('Saturday') && notes.Saturday.map(note => {
                        return <Card cardContent={note.cardContent} time="10 AM" />
                    })
                }
            </div>
        </div>
    )
}

export default WeeklyCards
