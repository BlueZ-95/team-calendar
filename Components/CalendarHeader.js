import { useState } from "react"

function CalendarHeader({ addNote }) {
    const [isWeekSelected, setIsWeekSelected] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const selectWeekOrMonth = (e, isWeekSelected) => {
        setIsWeekSelected(isWeekSelected);
    }

    const toggleAddNewNote = () => {
        const showForm = isFormVisible ? false : true;
        setIsFormVisible(showForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(e);
        setIsFormVisible(false);
    }

    return (
        <div className="w-full h-16 flex items-center justify-between">
            <h3 className="text-2xl font-medium">May 2021 <span className="text-gray-300 text-xl font-semibold">{'<>'}</span></h3>

            <span className="relative h-full flex items-center justify-between">
                <div className="flex items-center justify-center w-48 h-2/3 bg-blue-100 rounded-lg px-1 text-sm text-center font-medium">
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer transition duration-200 ease-out ${isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, true)}>Week</span>
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer transition duration-200 ease-out ${!isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, false)}>Month</span>
                </div>

                <span className="w-10 h-10 bg-blue-500 ml-5 rounded-lg cursor-pointer select-none hover:shadow-md"><p className="text-3xl font-light flex items-center justify-center text-white" onClick={() => toggleAddNewNote()}>+</p></span>

                <div className={`transform ${isFormVisible ? 'scale-100' : 'scale-0'} origin-top-right transition duration-75 ease-out absolute w-64 h-96 bg-blue-300 top-16 rounded-lg p-5 select-none`}>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="author" placeholder="Author" type="text" />
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="cardContent" placeholder="Content" type="text" />
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="date" placeholder="Date" type="text" />
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="day" placeholder="Day" type="text" />
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="hour" placeholder="Hour" type="text" />
                        <input className={"w-full h-8 p-2 my-2 rounded-md outline-none"} name="month" placeholder="Month" type="text" />
                        <button type="submit" className="w-full h-full text-white p-2 my-3 rounded-md bg-blue-500 ring-offset-4 ring-blue-500 ring-offset-blue-300 focus:ring-2">Add New Note</button>
                    </form>
                </div>
            </span>

        </div>
    )
}

export default CalendarHeader
