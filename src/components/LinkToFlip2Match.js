import React from "react"
import {Link} from "react-router-dom"
import ArrayMixer from "./ArrayMixer"

function LinkToFlip2Match()
    {

return (    
    <div>
        <Link  to={"/Flip2Match"} onClick={()=><ArrayMixer/>}>Play the game</Link>
    </div>)


}

export default LinkToFlip2Match