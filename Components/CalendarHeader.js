import { useState } from "react"

function CalendarHeader() {
    const [isWeekSelected, setIsWeekSelected] = useState(true);

    const selectWeekOrMonth = (e, isWeekSelected) => {
        setIsWeekSelected(isWeekSelected);
    }

    return (
        <div className="w-full h-16 flex items-center justify-between">
            <h3 className="text-2xl font-medium">May 2021 <span className="text-gray-300 text-xl font-semibold">{'<>'}</span></h3>

            <div className="flex items-center justify-center w-48 h-2/3 bg-blue-100 rounded-lg px-1 text-sm text-center font-medium">
                <span className={`block w-1/2 mx-1 py-1 cursor-pointer ${isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, true)}>Week</span>
                <span className={`block w-1/2 mx-1 py-1 cursor-pointer ${!isWeekSelected ? 'rounded-md shadow-lg text-blue-500 bg-white' : 'text-gray-400'}`} onClick={e => selectWeekOrMonth(e, false)}>Month</span>
            </div>
        </div>
    )
}

export default CalendarHeader
