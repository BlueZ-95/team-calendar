import Image from "next/image";
import { BsFillGridFill, BsCalendarFill, BsFillClockFill, BsFillShieldLockFill, BsInfoCircle } from "react-icons/bs";

function Sidebar() {
    return (
        <div className="h-screen w-16 border-r border-gray-200 flex flex-col items-center justify-between py-5">
            {/* Logo */}
            <Image src="/Logo.svg" width={30} height={30} />

            {/* Menus */}
            <div className="flex flex-col items-center justify-evenly h-1/2 w-full">
                <button className="w-full h-12 border-r-2 border-transparent border-opacity-0 outline-none flex items-center justify-center text-xl cursor-pointer hover:text-[#00a6fb] focus:text-[#00a6fb] focus:border-[#00a6fb]">
                    <BsFillGridFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent border-opacity-0 outline-none flex items-center justify-center text-xl cursor-pointer hover:text-[#00a6fb] focus:text-[#00a6fb] focus:border-[#00a6fb]">
                    <BsCalendarFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent border-opacity-0 outline-none flex items-center justify-center text-xl cursor-pointer hover:text-[#00a6fb] focus:text-[#00a6fb] focus:border-[#00a6fb]">
                    <BsFillClockFill />
                </button>
                <button className="w-full h-12 border-r-2 border-transparent border-opacity-0 outline-none flex items-center justify-center text-xl cursor-pointer hover:text-[#00a6fb] focus:text-[#00a6fb] focus:border-[#00a6fb]">
                    <BsFillShieldLockFill />
                </button>
            </div>
            {/* Info Icon */}
            <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg cursor-pointer">
                <BsInfoCircle className="text-[#00a6fb] text-xl" />
            </span>
        </div>
    )
}

export default Sidebar
