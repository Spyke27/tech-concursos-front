import { createContext, ReactNode, useState } from "react";

type ContextType = {
    name: string | null;
    right: number;
    wrong: number;
    setName: (n: string) => void;
    setRight: (n: number) => void;
    setWrong: (n: number) => void;
}

export const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children } : { children: ReactNode } ) => {
    const [name, setName] = useState("Teste");
    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);
    return (
        <UserContext.Provider value={{ name, setName, right, setRight, wrong, setWrong }}>{ children }</UserContext.Provider>
    )
}