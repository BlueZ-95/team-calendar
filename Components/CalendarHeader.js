import { useState } from "react"

function CalendarHeader() {
    const [isWeekSelected, setIsWeekSelected] = useState(true);

    const selectWeekOrMonth = (e, isWeekSelected) => {
        setIsWeekSelected(isWeekSelected);
    }

    return (
        <div className="w-full h-16 flex items-center justify-between">
            <h3 className="text-2xl font-medium">May 2021 <span className="text-gray-300 text-xl font-semibold">{'<>'}</span></h3>

            <span className="relative h-full flex items-center justify-between">
                <div className="flex items-center justify-center w-48 h-2/3 bg-blue-100 rounded-lg px-1 text-sm text-center font-medium">
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer ${isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, true)}>Week</span>
                    <span className={`block w-1/2 mx-1 py-1 cursor-pointer ${!isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, false)}>Month</span>
                </div>
                <span className="w-10 h-10 bg-green-500 ml-5 rounded-lg cursor-pointer hover:shadow-md"><p className="text-3xl font-light flex items-center justify-center text-white">+</p></span>

                <div className="absolute w-64 h-72 bg-green-200 top-16 rounded-xl">
                    
                </div>
            </span>

        </div>
    )
}

export default CalendarHeader
