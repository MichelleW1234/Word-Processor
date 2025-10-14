import {useState} from "react";

import "./Document.css";

function Document ({setOpenTitleFlag, currentDocument, setCurrentDocument}){

    const [text, setText] = useState("");
    return (

        <div className = "DocComponentsContainer">
            <div className = "DocTitleContainer">
                <h1 className = "DocTitle"> {currentDocument[2]} </h1>
                <button onClick = {() => setOpenTitleFlag(true)}> Edit Title</button>
            </div>

            <div className = "DocPaper"
                contentEditable={true}
                onInput={(e) => setText(e.currentTarget.textContent)}
                >
            </div>

        </div>

    );

}


export default Document;