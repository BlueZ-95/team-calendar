import Calendar from "./Calendar";
import Header from "./Header";

function Mainbar() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <Calendar />
        </div>
    )
}

export default Mainbar
