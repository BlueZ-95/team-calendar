import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { firebaseInit } from "../Utilities/firebase";
import { currentHour } from "../Utilities/date_time_utils";

function Header() {

    const router = useRouter();

    const [userDetails, setUserDetails] = useState({});
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

    useEffect(() => {
        let rawUserDetails = localStorage.getItem('userDetails');
        if (rawUserDetails) {
            try {
                setUserDetails(JSON.parse(localStorage.getItem('userDetails')).userDetails);
            } catch (error) {
                router.push('/Login')
            }
        }
    }, []);

    const toggleProfileMenu = () => {
        setIsProfileMenuVisible(isProfileMenuVisible ? false : true)
    }

    const handleMenuClick = e => {
        switch (e.target.innerText) {
            case 'Logout':
                setUserDetails({});
                localStorage.setItem('userDetails', {});
                router.push('/Login');
                break;

            default:
                break;
        }
    }

    function logoutUser() {
        firebaseInit.auth().signOut().then(function () {
            // Sign-out successful.
            // setUserDetails({});
            localStorage.removeItem('userDetails');
            router.push('/Login');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    console.log(currentHour);
    return (
        <div className="flex items-center justify-between w-full h-16 border-b border-gray-200 px-10">
            <h1 className="text-md font-medium">Good {currentHour >= 18 ? 'Evening' : currentHour >= 12 ? 'Afternoon' : 'Morning'}, {userDetails.userName}</h1>
            <div onClick={toggleProfileMenu} className={`relative w-10 h-10 rounded-full bg-green-300 cursor-pointer`}>
                <ul onClick={handleMenuClick} className={`transform ${isProfileMenuVisible ? 'scale-100' : 'scale-0'} origin-top-right transition duration-75 ease-out absolute bg-white border border-gray-300 border-opacity-50 shadow-xl rounded-md top-12 right-1 z-20`}>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Profile</li>
                    <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
