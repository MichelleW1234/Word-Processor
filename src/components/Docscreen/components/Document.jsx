import DocumentReader from "./DocumentReader.jsx";
import TitleReader from "./TitleReader.jsx";

import "./Document.css";

function Document ({setOpenTitleFlag, currentDocument, setCurrentDocument, cursorLocation, setCursorLocation}){

    return (

        <div className = "DocComponentsContainer">
            <div className = "DocTitleContainer">
                <div className = "DocTitle">
                    <TitleReader
                        currentDocument={currentDocument}
                    />
                </div>
                <button onClick = {() => setOpenTitleFlag(true)}> Edit Title</button>
            </div>

        <div className = "DocPage">
                <DocumentReader
                    currentDocument={currentDocument}
                    setCurrentDocument={setCurrentDocument}
                    cursorLocation = {cursorLocation}
                    setCursorLocation = {setCursorLocation}
                />
        </div>
        </div>

    );

}


export default Document;