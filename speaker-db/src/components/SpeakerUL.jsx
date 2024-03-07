/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import SpeakerLI from "./SpeakerLI";
import { createClient } from "@supabase/supabase-js";
import SplCalculator from "./SplCalculator";


//connet to supabase DB

const sb = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

let speakers = []
async function getSpeakers(){
    const result = await sb.from("speakers").select();
    const data = result.data
    speakers = data
}
getSpeakers()
function SpeakerUL(props){
    
    const [splCalc, setCalculator] = useState(0)

    function listSpeakers(speaker) {
        return <SpeakerLI
            key={speaker.id} 
            itemID={speaker.itemid}
            brand={speaker.brand}
            size={speaker.speakersize}
            spl={speaker.spl}
            isSub={speaker.issub}
            hasBT={speaker.hasbt}
            setCalculator={splCalc=>setCalculator(splCalc)}
            />  
    }

    let showCalc = false

    if(splCalc.spl > 0){
        showCalc = true
    }

    return(
        <div className="speakerList">
            {showCalc && <SplCalculator spl={splCalc.spl}/>}
            <section className="speaker-list-header">
            <h3 className="speaker-list-data">ItemID</h3>
            <h3 className="speaker-list-data">Brand</h3>
            <h3 className="speaker-list-data">Size</h3>
            <h3 className="speaker-list-data">Max SPL</h3>
            <h3 className="speaker-list-data">Main/Sub</h3>
            <h3 className="speaker-list-data">BT Enabled</h3>
            </section>
            
            {speakers.map(listSpeakers)}
        </div>
    )
}
export default SpeakerUL