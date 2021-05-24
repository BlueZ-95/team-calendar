import { useState, useRef } from "react";
import { currentDate, currentYear, currentMonth } from "../Utilities/date_time_utils";

function CalendarHeader({ addNote, currentWeekDates }) {
    const [isWeekSelected, setIsWeekSelected] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const [cardValues, setCardValues] = useState({
        date: currentDate,
        cardContent: '',
        hour: '',
        duration: '2'
    });

    const cardValuesRef = useRef(cardValues);

    const inputChangeHandler = e => {
        let value = e.target.value;
        var _cardValues = { ...cardValues };
        _cardValues[e.target.name] = value;
        cardValuesRef.current = _cardValues;
        setCardValues(_cardValues);
    }

    const selectWeekOrMonth = (e, isWeekSelected) => {
        setIsWeekSelected(isWeekSelected);
    }

    const toggleAddNewNote = () => {
        const showForm = isFormVisible ? false : true;
        setIsFormVisible(showForm);
    }

    const handleSubmit = e => {
        e.preventDefault();
        //let selectedDay = e.target.date.selectedIndex;
        addNote(e, cardValuesRef.current);
        setIsFormVisible(false);
    }

    return (
        <div className="w-full h-16 flex items-center justify-between">
            <h3 className="text-2xl font-medium">{currentMonth} {currentYear}</h3>

            <span className="relative h-full flex items-center justify-between">
                <div className="flex items-center justify-center w-48 h-2/3 bg-blue-100 rounded-lg px-1 text-sm text-center font-medium">
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer transition duration-200 ease-out ${isWeekSelected ? 'rounded-md shadow-lg text-indigo-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, true)}>Week</span>
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer transition duration-200 ease-out ${!isWeekSelected ? 'rounded-md shadow-lg text-indigo-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, false)}>History</span>
                </div>

                <span className="w-10 h-10 bg-indigo-500 ml-5 rounded-lg cursor-pointer select-none hover:shadow-md"><p className="text-3xl font-light flex items-center justify-center text-white" onClick={() => toggleAddNewNote()}>+</p></span>

                <div className={`transform ${isFormVisible ? 'scale-100' : 'scale-0'} origin-top-right transition duration-75 ease-out absolute w-64 top-16 rounded-lg select-none z-10 shadow-xl backdrop-filter backdrop-blur-2xl border border-gray-300 border-opacity-25`}>

                    <form onSubmit={e => handleSubmit(e)} className="p-5">
                        {/* <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="author" placeholder="Author" type="text" /> */}
                        <p>Select Date :</p>
                        <select className={"w-full h-8 p-2 my-2 rounded-md outline-none bg-white"} name="date" value={cardValues.selectedDate} onChange={inputChangeHandler}>
                            {
                                currentWeekDates.map((date, index) => {
                                    date = date;
                                    return (<option key={index} value={date} disabled={date < currentDate}>{date}</option>)
                                })
                            }
                        </select>
                        <p>Content :</p>
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="cardContent" placeholder="Content" value={cardValues.cardContent} onChange={inputChangeHandler} type="text" required />
                        <p>Time :</p>
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="hour" placeholder="Hour" value={cardValues.hour} onChange={inputChangeHandler} type="text" required />
                        <p>Duration ({cardValues.duration} Hour) :</p>
                        <input className={"rounded-lg overflow-hidden appearance-none bg-white h-3 w-full outline-none"} type="range" name="duration" min="1" max="5" value={cardValues.duration} onChange={inputChangeHandler}></input>
                        <button type="submit" className="w-full h-full text-white p-2 my-3 rounded-md bg-indigo-500 ring-offset-4 ring-indigo-500 ring-offset-indigo-400 focus:ring-2">Add New Note</button>
                    </form>
                </div>
            </span>

        </div>
    )
}

export default CalendarHeader
