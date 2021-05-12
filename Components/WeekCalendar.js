import { useState } from "react"

function WeekCalendar() {

    const [dayTime, setDayTime] = useState(['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'])

    return (
        <div className="border border-[#e3e9ec] rounded-lg overflow-hidden">
            <table className="table-fixed border-collapse">
                <thead className="bg-[#F7FCFE]">
                    <tr className="h-16">
                        <td className="w-16 text-center border-r border-b border-[#e3e9ec]"></td>
                        <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium">Monday</p></td>
                        <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium">Tuesday</p></td>
                        <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium">Wednesday</p></td>
                        <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium">Thursday</p></td>
                        <td className="w-72 text-center border-b"><p className="font-medium">Friday</p></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dayTime.map(time => {
                            return (
                                <tr className="h-16">
                                    <td className="w-16 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium text-gray-500">{time}</p></td>
                                    <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium"></p></td>
                                    <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium"></p></td>
                                    <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium"></p></td>
                                    <td className="w-72 text-center border-r border-b border-[#e3e9ec]"><p className="font-medium"></p></td>
                                    <td className="w-72 text-center border-b"><p className="font-medium"></p></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default WeekCalendar
