import { useContext, useEffect, useState } from "react"
import { api } from "../../service/Service"
import Question from "../../model/Question"
import { UserContext } from "../../context/UserContext"

function QuestionAll() {

    const userLogged = useContext(UserContext);

    const [questions, setQuestions] = useState<Question[]>([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(0)

    useEffect(() => {
        const getQuestions = async () => {
            const response = await api.get('/questions')
            setQuestions(response.data)
        }

        getQuestions()
    }, [])

    const handleClick = async (option: number) => {
        setClicked(true);
        setCorrectAnswer(Number(questions[questionNumber].answer));

       if(Number(questions[questionNumber].answer) == option){
        setCorrect(1)
        userLogged?.setRight(userLogged.right + 1);
       } else{
        setCorrect(2)
        userLogged?.setWrong(userLogged.wrong + 1);
       }
    }

    const nextQuestion = () => {
        if(questionNumber < questions.length - 1){
            setQuestionNumber(questionNumber + 1)
            setCorrect(0)
            setClicked(false);
            setCorrectAnswer(0)
        }
    }

    const backQuestion = () => {
        if(questionNumber > 0){
            setQuestionNumber(questionNumber - 1)
            setCorrect(0)
            setClicked(false);
            setCorrectAnswer(0)
        }
    }

return(
<>
    {questions[questionNumber] &&
        <div className="px-8 w-2/3 relative">
            <div className="flex justify-center items- flex-col mb-5">
                <div className="w-full h-10 bg-slate-950 flex items-center py-5 px-2">
                    <div className="text-white text-base bg-slate-800 w-6 flex justify-center items-center mr-5">{questions[questionNumber].id}</div>
                    <p className="text-slate-300 text-base"><strong className="text-white">Ano: </strong>2024</p>
                    <strong className="text-slate-500 mx-5">|</strong>
                    <p className="text-slate-300 text-base">Desenvolvimento de Software</p>
                </div>

                <div className="flex-col flex justify-center p-5">
                    <h2 className="text-lg text-slate-200 mb-8">{questions[questionNumber].question}</h2>
                    <ul className="list-none [&>*]:mb-2">
                        <li className="text-white flex items-center gap-5 w-full">
                            <button
                            onClick={() => handleClick(1)}
                            disabled={clicked}
                            className="flex items-center justify-center rounded-full border-cyan-700 border-2 px-2.5 py-0.5 hover:bg-cyan-700 hover:cursor-pointer">
                                A
                            </button>
                            <p className={correctAnswer == 1 ? "text-green-300" : "text-white"}>
                                {questions[questionNumber].optionA}
                            </p>
                        </li>
                        <li className="text-white flex items-center gap-5 w-full">
                            <button 
                            onClick={() => handleClick(2)}
                            disabled={clicked}
                            className="flex items-center justify-center rounded-full border-cyan-700 border-2 px-2.5 py-0.5 hover:bg-cyan-700 hover:cursor-pointer">
                                B
                            </button>
                            <p className={correctAnswer == 2 ? "text-green-300" : "text-white"}>
                                {questions[questionNumber].optionB}
                            </p>
                        </li>
                        <li className="text-white flex items-center gap-5 w-full">
                            <button 
                            onClick={() => handleClick(3)}
                            disabled={clicked}
                            className="flex items-center justify-center rounded-full border-cyan-700 border-2 px-2.5 py-0.5 hover:bg-cyan-700 hover:cursor-pointer">
                                C
                            </button>
                            <p className={correctAnswer == 3 ? "text-green-300" : "text-white"}>
                                {questions[questionNumber].optionC}
                            </p>
                        </li>
                        <li className="text-white flex items-center gap-5 w-full">
                            <button 
                            onClick={() => handleClick(4)}
                            disabled={clicked}
                            className="flex items-center justify-center rounded-full border-cyan-700 border-2 px-2.5 py-0.5 hover:bg-cyan-700 hover:cursor-pointer">
                                D
                            </button>
                            <p className={correctAnswer == 4 ? "text-green-300" : "text-white"}>
                                {questions[questionNumber].optionD}
                            </p>
                        </li>
                        <li className="text-white flex items-center gap-5 w-full">
                            <button 
                            onClick={() => handleClick(5)}
                            disabled={clicked}
                            className="flex items-center justify-center rounded-full border-cyan-700 border-2 px-2.5 py-0.5 hover:bg-cyan-700 hover:cursor-pointer">
                                E
                            </button>
                            <p className={correctAnswer == 5 ? "text-green-300" : "text-white"}>
                                {questions[questionNumber].optionE}
                            </p>
                        </li>
                    </ul>
                    {correct == 1 &&
                        <div className="text-green-300 text-lg px-5 py-2 border-2 border-green-300 rounded-md text-center w-full">Você Acertou!</div>
                    }
                    {correct == 2 &&
                        <div className="text-red-300 text-lg px-5 py-2 border-2 border-red-300 rounded-md text-center w-full">Você Errou!</div>
                    }
                </div>
            </div>
            <div className="flex gap-5 absolute bottom-0 items-center">
                <button 
                onClick={backQuestion}
                type="button" className="cursor-pointer bg-cyan-600 rounded-md text-slate-100 px-5 py-2 hover:bg-cyan-600/80">
                    ❮ VOLTAR
                </button>
                <button 
                onClick={nextQuestion}
                type="button" className="cursor-pointer bg-cyan-600 rounded-md text-slate-100 px-5 py-2 hover:bg-cyan-600/80">
                    PRÓXIMO ❯
                </button>
                <span className="text-white ml-44">{questions[questionNumber].id} / {questions.length}</span>
            </div>
        </div>
    }
</>
)
}
export default QuestionAll;