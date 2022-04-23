import React from "react";
import HideAll from "./HideAll";
import ShowAll from "./ShowAll";

function ActionsPane(){

    return(
        <div className="action-pane">
            <HideAll/>
            <ShowAll/>
        </div>
    )
}

export default ActionsPane