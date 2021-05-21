function Card({ cardContent, time, author }) {
    let cardColors = ['bg-indigo-400', 'bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-400', 'bg-purple-400'];

    let randomSelectedColor = Math.floor(Math.random() * 6);
    return (
        <div className={`${cardColors[randomSelectedColor]} w-48 h-60 flex flex-col items-start justify-around rounded-md px-5 py-5 m-3 cursor-pointer shadow-sm transform duration-100 ease-out hover:shadow-lg hover:scale-105`}>
            {/* <div className="w-8 h-8 ml-auto rounded-full bg-yellow-200"></div> */}
            <span className="flex flex-col items-center justify-evenly h-1/2">
                <p className="w-full text-3xl text-white font-medium">{cardContent}</p>
                <p className="w-full text-sm text-white font-light">{time}</p>
            </span>
            <p className="w-full text-xl text-white font-light">{author}</p>
        </div>
    )
}

export default Card
