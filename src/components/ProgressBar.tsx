import ProgressBar from "@ramonak/react-progress-bar";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const ProgressBarComponent = () => {
    const userLogged = useContext(UserContext);
    const total = userLogged?.right! + userLogged?.wrong!;
    const percent = Number((userLogged?.right! * 100 / total).toFixed(0));

    return (
        <ProgressBar 
            className=""
            completed={percent}
            bgColor="#0E7490"
            height="30px" 
            animateOnRender={true} 
        />
    )
};