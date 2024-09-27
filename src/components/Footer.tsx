import { Link } from "react-router-dom";

function Footer() {

    return(
        <>
        <div className=" bg-slate-900 flex flex-col py-5">
            <p className="text-slate-200 text-center">
                Desenvolvido por 
                <Link className="text-cyan-500" to={"https://github.com/Spyke27"}> &#60;Rodrigo Daniel 	&#47;&#62;</Link>
            </p>
        </div>
        </>
    )
}
export default Footer;