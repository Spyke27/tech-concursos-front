import { Link } from "react-router-dom";

function NavBar() {

    return(
        <>
        <nav className="h-16 md:h-16 flex items-center justify-between px-3 md:px-12 bg-slate-900 w-screen fixed">
            <h1 className="text-2xl font-medium text-blue-200">
                Tech-Concursos
            </h1>

            <div className="items-center flex relative justify-center text-slate-300 [&>*:hover]:text-white">
            <Link to={'/questions'}>Questions</Link>
            </div>
        </nav>
        </>
    )
}
export default NavBar;