import React, {useState,useContext, useEffect} from "react";
import {Context} from "../Context"


function MyCard ({front, back, isFlipped, background="transparent"}) {

    const {isAllFlipped} = useContext(Context)

    useEffect(()=>{
            isAllFlipped ? opener():closer()
        },
        [isAllFlipped]

    )

    const [isCardFlipped, setIsCardFlipped] = useState(isFlipped);

    function opener(){
        setIsCardFlipped(true)
    }

    function closer(){
        setIsCardFlipped(false)
    }


    return (
        <div className={isCardFlipped ? "Mycard flipped" : "Mycard"}>
            <div className='Mycard-inner'>
                <div style={{background: background}} className='Mycard-front' onClick={()=>opener()}>
                    {front}
                </div>
                <div className='Mycard-back' onClick={()=>closer()}>
                    {back}
                </div>
            </div>
        </div>
    )
}

export default MyCard