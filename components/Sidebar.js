import Image from "next/image";
import { BsFillGridFill, BsCalendarFill, BsFillClockFill, BsFillShieldLockFill, BsInfoCircle } from "react-icons/bs";

function Sidebar() {
    return (
        <div className="fixed h-screen w-16 border-r border-gray-200 flex flex-col items-center justify-between py-5">
            {/* Logo */}
            <Image src="/Logo.svg" width={30} height={30} />

            {/* Menus */}
            <div className="flex flex-col items-center justify-evenly h-1/2 w-full">
                <button className="w-full h-12 border-r-2 outline-none flex items-center justify-center text-xl cursor-pointer hover:text-indigo-400 text-indigo-400 border-indigo-400">
                    <BsFillGridFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent outline-none flex items-center justify-center text-xl cursor-pointer hover:text-indigo-400 focus:text-indigo-400 focus:border-indigo-400">
                    <BsCalendarFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent outline-none flex items-center justify-center text-xl cursor-pointer hover:text-indigo-400 focus:text-indigo-400 focus:border-indigo-400">
                    <BsFillClockFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent outline-none flex items-center justify-center text-xl cursor-pointer hover:text-indigo-400 focus:text-indigo-400 focus:border-indigo-400">
                    <BsFillShieldLockFill />
                </button>
            </div>
            {/* Info Icon */}
            <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg cursor-pointer">
                <BsInfoCircle className="text-indigo-400 text-xl" />
            </span>
        </div>
    )
}

export default Sidebar
