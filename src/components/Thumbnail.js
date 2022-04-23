import React from "react"
import {Link} from "react-router-dom"

function Thumbnail({item}){
    const pathToImg = process.env.PUBLIC_URL + `/img/${item.id}.jpg`
    return(
        <section className={`size-${item.size}`} style={{background: `url(${pathToImg}) 0% 0% / cover no-repeat white`}}>
            <div className="for-title">{item.title}</div>
                {item.tag && (<div className="for-tag">{item.tag}</div>)}
            <Link to={'/' + item.id} className="grid-link"/>
        </section>
    )
}

export default Thumbnail