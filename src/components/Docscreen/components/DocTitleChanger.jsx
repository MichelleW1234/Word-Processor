import {useState} from "react";

import "./DocTitleChanger.css";

function DocTitleChanger ({setOpenTitleFlag, setCurrentDocument}){

    const [newTitle, setNewTitle] = useState("");

    const processNewTitle = () => {

        if (newTitle === ""){

            setCurrentDocument(prev => {
                let newDocs = [...prev];
                newDocs[2]="Untitled";
                return newDocs;
            })

        } else {

            setCurrentDocument( prev => {
                let newDocs = [...prev];
                newDocs[2]= newTitle;
                return newDocs;
            });

        }

        setOpenTitleFlag(false);

    }

    return (

        <div className = "DocTitleChangerFloatingFlag">

            <div className = "DocTitleChangerBox">
                Enter your new title below:

                <div className = "DocTitleChangerText"> textBox </div>
                <button onClick = {() => processNewTitle()}> Submit </button>

            </div>
            <button onClick = {() => setOpenTitleFlag(false)}> Close </button>
        </div>

    );

}


export default DocTitleChanger;