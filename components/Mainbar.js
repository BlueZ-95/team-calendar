import Calendar from "./Calendar";
import Header from "./Header";

function Mainbar({ notes }) {
    return (
        <div className="flex flex-col w-full h-full ml-16 overflow-hidden">
            <Header />
            <Calendar />
        </div>
    )
}

export default Mainbar
