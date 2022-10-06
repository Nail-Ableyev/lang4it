import React, {useState, useEffect,useContext} from "react"
import masterlist from "../source.json";
import MyCard2 from "./MyCard2";
import ArrayMixer from "./ArrayMixer";
import {Context} from "../Context"



function Flip2Match (){
    const {currentPage, activeGroup, listOfOpened, listOfGuessed} = useContext(Context);

    const [forceClose, setForceClose] = useState(false)

    const target = currentPage
    console.log("Fired parent")


    activeGroup.length < 1 && ArrayMixer()



    // const [forcedClose, setForcedClose]=useState(-1)

    const listToDisplay =[]


    // useEffect(()=>{
    //     if (forcedClose > 0){
    //         populator()
    //     }
    // }, [forcedClose])

    function populator(){
        console.log("HERE")
        for (let i =0; i<activeGroup.length; i++){
            if (listOfOpened.includes(activeGroup[i].id))

            {
                
                if (activeGroup[i].type === "pic"){
                    listToDisplay.push(
                    <MyCard2 
                        key={activeGroup[i].item+"pic"}
                        cardId={activeGroup[i].id} 
                        front={<img src={`${process.env.PUBLIC_URL}/img/cardBack.png`}/>} 
                        back={<img src={`${process.env.PUBLIC_URL}/img/${target}/${activeGroup[i].item}.svg`}/>} 
                        isFlipped={true}
                        isActive={false}
                        
                    />
                    )
                }
                else if (activeGroup[i].type === "word"){
                    listToDisplay.push(
                    <MyCard2 
                            key={activeGroup[i].item+"word"}
                            cardId={activeGroup[i].id} 
                            front={<img src={`${process.env.PUBLIC_URL}/img/cardBack.png`}/>} 
                            back={activeGroup[i].item} 
                            isFlipped={true}
                            isActive={false}
                        />
                    )
                }
            }
            else {
                if (activeGroup[i].type === "pic"){
                    listToDisplay.push(
                    <MyCard2 
                        key={activeGroup[i].item+"pic"}
                        cardId={activeGroup[i].id} 
                        front={<img src={`${process.env.PUBLIC_URL}/img/cardBack.png`}/>} 
                        back={<img src={`${process.env.PUBLIC_URL}/img/${target}/${activeGroup[i].item}.svg`}/>} 
                        isFlipped={false}
                        isActive={true}
                        isForceClosed = {forceClose}
                        setForceClose={setForceClose}
                     />
                    )
                }
                else if (activeGroup[i].type === "word"){
                    listToDisplay.push(
                    <MyCard2 
                            key={activeGroup[i].item+"word"}
                            cardId={activeGroup[i].id} 
                            front={<img src={`${process.env.PUBLIC_URL}/img/cardBack.png`}/>} 
                            back={activeGroup[i].item} 
                            isFlipped={false}
                            isActive={true}
                            isForceClosed = {forceClose}
                            setForceClose={setForceClose}
                        />
                    )
                }
            }

        }
    }


    populator()

    return(
        <div>
           
            <div>{listToDisplay}</div>
        </div>
    )
}

export default Flip2Match