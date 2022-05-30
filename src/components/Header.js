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
                    <h1>L<span>4</span>iT</h1>
                </Link>
                <span>|</span>
                <span>{currentPage}</span>
                <Link className="dbLink" to={"/dashboard"}>{currentPage!=="dashboard" && "db"}</Link>
            </header>
            <div className="divider"></div>
        </>
    )
}

export default Header