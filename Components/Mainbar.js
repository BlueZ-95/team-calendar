import Calendar from "./Calendar";
import Header from "./Header";

function Mainbar() {
    return (
        <div className="flex flex-col w-full h-full">
            <Header />
            <Calendar />
        </div>
    )
}

export default Mainbar
