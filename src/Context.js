import React, {useState} from "react";

const Context=React.createContext()

function ContextProvider({children}){

    const [currentPage, setCurrentPage] = useState("blah")

    const [isAllFlipped, setIsAllFlipped] = useState(false)

    return (
        <Context.Provider value={{currentPage,setCurrentPage,isAllFlipped,setIsAllFlipped}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}