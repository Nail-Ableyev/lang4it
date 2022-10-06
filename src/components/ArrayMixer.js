import React, {useContext} from "react"
import {Context} from "../Context"
import masterlist from "../source.json";

function ArrayMixer(){
    console.log("Fired")
    const {currentPage, activeGroup, setActiveGroup} = useContext(Context);



    if (!activeGroup.length>0){
        
        const listOfPics = masterlist[currentPage].map((item, index) => 
        ({item: item,
        id: index,
        type: "pic"})
    )


    const listOfWords = masterlist[currentPage].map((item, index) => 
        ({
            item: item,
            id:index,
            type: "word"
        })
        )


    const combinedList = listOfPics.concat(listOfWords).sort((a, b) => 0.5 - Math.random())

    setActiveGroup(combinedList)

    return

    }

 return(
    <div>test</div>
 )
}

export default ArrayMixer      



