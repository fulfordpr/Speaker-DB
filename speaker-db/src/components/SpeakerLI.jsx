/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function SpeakerLI(props){
    let isSub = ""
    let hasBT = ""

    if(props.isSub){
        isSub = "Sub"
    } else{
        isSub = "Main"
    }
    if(props.hasBT){
        hasBT = "BT"
    } else {
        hasBT = "No BT"
    }
    const spl = props.spl
    return(
        <div className="speaker-list-view" onClick={()=>{props.setCalculator({spl})}}>
            <h3 className="speaker-list-itemID">{props.itemID}</h3>
            <p className="speaker-list-data">{props.brand}</p>
            <p className="speaker-list-data">{props.size}"</p>
            <p className="speaker-list-data">{props.spl} db</p>
            <p className="speaker-list-data">{isSub}</p>
            <p className="speaker-list-data">{hasBT}</p>
        </div>
        
    )
}
export default SpeakerLI