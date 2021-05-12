function Card({ cardContent, time, author }) {
    return (
        <div className="w-48 bg-[#F5EBFD] h-60 flex flex-col items-start justify-between rounded-md px-5 py-5 m-3 cursor-pointer shadow-sm hover:shadow-md">
            <div className="w-12 h-12 ml-auto rounded-full bg-yellow-200"></div>
            <span className="flex flex-col items-center justify-between h-1/2">
                <p className="w-full text-3xl text-[#8414E2] font-medium">{cardContent}</p>
                <p className="w-full text-sm text-gray-400 font-light">{time}</p>
            </span>
        </div>
    )
}

export default Card
