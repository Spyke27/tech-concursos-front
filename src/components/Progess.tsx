import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ProgressBarComponent } from "./ProgressBar";

function Progress() {
    const userLogged = useContext(UserContext);

    return(
        <>
        <div className="w-1/3 flex flex-col py-8 px-5 gap-5 bg-slate-900/80 rounded-md">
            <h2 className="text-3xl text-white text-center font-medium">Usuário: {userLogged?.name}</h2>
            <hr />

            <div className="flex flex-col mt-3">
                <div className="flex w-full items-center justify-center">
                    <div className="relative flex items-center justify-center bg-cyan-700 rounded-full w-44 h-44">
                        <div className="flex items-center justify-center bg-slate-900/90 rounded-full w-36 h-36 absolute">
                            <p className="text-white text-lg text-center">
                                <span className="font-bold text-4xl">{userLogged?.right! + userLogged?.wrong!}</span>
                                <br />
                                Questões resolvidas
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-slate-200 text-lg text-center mt-5">
                    Você acertou  {userLogged?.right} {Number(userLogged?.right) == 1 ? "questão" : "questões"}
                </p>

                <div className="mt-5">
                    <span className="text-slate-200 text-lg">Aproveitamento:</span>
                    <ProgressBarComponent />
                </div>
            </div>
        </div>
        </>
    )
}
export default Progress;