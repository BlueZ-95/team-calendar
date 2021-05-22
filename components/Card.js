import { useEffect, useState } from "react";

function Card({ cardContent, time, author, duration }) {
    let cardColors = ['bg-indigo-400', 'bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-purple-400'];
    let cardHeight = getCardHeight(duration);
    let randomSelectedColor = Math.floor(Math.random() * 5);

    // const [cardHeight, setCardHeight] = useState('52');

    function getCardHeight(duration) {
        switch (duration) {
            case '1':
                return 'h-c1';
            case '2':
                return 'h-c2';
            case '3':
                return 'h-c3';
            case '4':
                return 'h-c4';
            case '5':
                return 'h-c5';
            default:
                console.log('default');
                return 'c1';
        }
    }

    return (
        <div className={`${cardColors[randomSelectedColor]} w-48 ${cardHeight} flex flex-col items-start justify-around rounded-md px-5 py-3 m-3 cursor-pointer shadow-sm transform duration-100 ease-out hover:shadow-lg hover:scale-105`}>
            <span className="flex flex-col items-center justify-evenly h-1/2">
                <p className="w-full text-3xl text-white font-medium">{cardContent}</p>
                <p className="w-full text-lg text-white font-light">Time : {time}</p>
                <p className="w-full text-lg text-white font-light">Duration : {duration} (Hour)</p>
            </span>
            <p className="w-full text-xl text-white font-bold">{author}</p>
        </div>
    )
}

export default Card
