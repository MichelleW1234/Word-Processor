import {useState} from "react";

import "./DocTitleChanger.css";

function DocTitleChanger ({setOpenTitleFlag, setCurrentDocument}){

    const [newTitle, setNewTitle] = useState("");
    const [error, setError] = useState("Please shorten your title to 40 letters max.");
    const [errorFlag, setErrorFlag] = useState(false);

    const processNewTitle = () => {

        if (newTitle.length > 40) {

            setErrorFlag(true);

        } else {

            setErrorFlag(false);

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

    }

    return (

        <div className = "DocTitleChangerFloatingFlag">

            <div className = "DocTitleChangerBox">
                Enter your new title below:

                <div className = "DocTitleChangerText"
                    contentEditable={true}
                    onInput={(e) => setNewTitle(e.currentTarget.textContent)}>
                </div>

                <button onClick = {() => processNewTitle()}> Done </button>

                {errorFlag && error}

            </div>
        </div>

    );

}


export default DocTitleChanger;