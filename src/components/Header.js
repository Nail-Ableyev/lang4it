import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context";

function Header(){
    const {currentPage} = useContext(Context)
    return(
        <>
            <header>
                <span>|</span>
                <Link to={"/"}>
                    <h1>HUB</h1>
                </Link>
                <span>|</span>
                <span>{currentPage}</span>
            </header>
            <div className="divider"></div>
        </>
    )
}

export default Header