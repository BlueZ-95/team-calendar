import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem('userDetails')).userDetails);
    }, [])

    return (
        <div className="flex items-center justify-between w-full h-16 border-b border-gray-200 px-10">
            <h1 className="text-md font-medium">Good Morning, {userDetails.userName}</h1>
            <div className="w-10 h-10 rounded-full bg-green-300"></div>
            {/* <Image src="" width={20} height={20} layout="fixed" /> */}
        </div>
    )
}

export default Header
