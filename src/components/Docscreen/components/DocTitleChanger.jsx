import {useState} from "react";

import "./DocTitleChanger.css";

function DocTitleChanger ({setOpenTitleFlag, setCurrentDocument}){

    const [newTitle, setNewTitle] = useState("");

    const processNewTitle = () => {

        if (newTitle === ""){

            setCurrentDocument(prev => {
                let newDoc = [...prev];
                newDoc[2]="85,110,116,105,116,108,101,100,";
                return newDoc;
            })

        } else {

            let asciiArray = []

            for (let i =0; i<newTitle.length; i++){

                asciiArray.push(newTitle.charCodeAt(i));

            }
            console.log(asciiArray)

            setCurrentDocument( prev => {
                let newDoc = [...prev];
                newDoc[2]= asciiArray.join(",");
                return newDoc;
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