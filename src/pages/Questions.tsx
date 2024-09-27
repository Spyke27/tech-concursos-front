import { useEffect } from "react";
import QuestionAll from "../components/questions/QuestionAll";
import Progress from "../components/Progess";

function Questions() {

    useEffect(() => {
        document.title = 'Questions';
      }, []);

    return(
        <>
        <div className="bg-slate-800 flex px-5 pt-24 pb-2">
            <QuestionAll />
            <Progress />
        </div>
        <div className="w-full h-28 bg-slate-800">

        </div>
        </>
    )
}

export default Questions;