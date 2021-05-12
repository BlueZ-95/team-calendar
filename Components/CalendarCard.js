function CalendarCard() {
    return (
        <div className="w-2/3 bg-purple-200 h-48 flex flex-col items-start justify-between rounded-md px-5 py-5">
            <span className="flex flex-col items-center justify-self-center">
                <p className="text-xl text-purple-800 font-medium">Coding</p>
                <p className="text-sm text-gray-500">10 AM</p>
            </span>
            <div className="w-16 h-16 rounded-full bg-yellow-200"></div>
        </div>
    )
}

export default CalendarCard
