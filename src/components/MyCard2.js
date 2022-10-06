import React, {useState,useContext, useEffect} from "react";
import {Context} from "../Context"


function MyCard2 ({front, back, isFlipped, isActive, background="transparent", cardId, isForceClose, setForceClose}) {

    const {listOfGuessed, setListOfGuessed, setListOfOpened} = useContext(Context);
    const [isCardFlipped, setIsCardFlipped] = useState(isFlipped);

    function opener(){
        if(isActive){
            setIsCardFlipped(true)

            if(listOfGuessed.length === 0){
                setListOfGuessed([cardId])
                console.log("first guess")
            }
            else if (listOfGuessed.length === 1){
                if(listOfGuessed[0]===cardId){
                    setListOfOpened(ids => [...ids, cardId])
                    setListOfGuessed([])
                    console.log("second guess correct")
                }
                else{
                    setListOfGuessed([])
                    console.log("second guess wrong")
                    setForceClose(true)
                }
            }
        }
        
    }

    function closer(){
        if(isActive){
            setIsCardFlipped(false)
        }
    }




    return (
        <div className={isCardFlipped && !isForceClose ? "Mycard flipped" : "Mycard"}>
            <div className='Mycard-inner'>
                <div style={{background: background}} className='Mycard-front' onClick={()=>{opener()}}>
                    {front}
                </div>
                <div className='Mycard-back' onClick={()=>closer()}>
                    {back}
                </div>
            </div>
        </div>
    )
}

export default MyCard2