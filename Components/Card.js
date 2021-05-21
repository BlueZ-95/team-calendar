function Card({ cardContent, time, author }) {
    return (
        <div className="w-48 bg-blue-400 h-60 flex flex-col items-start justify-around rounded-md px-5 py-5 m-3 cursor-pointer shadow-sm transform duration-100 ease-out hover:shadow-lg hover:scale-105">
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
