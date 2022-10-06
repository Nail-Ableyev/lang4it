import React, {useState} from "react";

const Context=React.createContext()

function ContextProvider({children}){

    const [currentPage, setCurrentPage] = useState("blah")

    const [isAllFlipped, setIsAllFlipped] = useState(false)

    const [activeGroup, setActiveGroup] = useState([])

    const [listOfOpened, setListOfOpened] = useState([])

    const [listOfGuessed, setListOfGuessed]=useState([])

    return (
        <Context.Provider value={{
            currentPage,
            setCurrentPage,
            isAllFlipped,
            setIsAllFlipped,
            activeGroup,
            setActiveGroup,
            listOfOpened,
            setListOfOpened,
            listOfGuessed,
            setListOfGuessed
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}