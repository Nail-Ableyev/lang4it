import React, {useContext, useEffect} from "react"
import {Context} from "../Context"

import Thumbnail from "./Thumbnail";

function Main({mainScreenList}){
    const {setCurrentPage} = useContext(Context)

    const elementsForMainScreen = mainScreenList.map(item => (
        <Thumbnail key={item.id} item={item} />
    ))

useEffect(()=> {
    setCurrentPage("")
},[])

    return(
        <>
        <main>
            {elementsForMainScreen}
        </main>
        </>
    )
}

export default Main