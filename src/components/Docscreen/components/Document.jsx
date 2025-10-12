import DocumentReader from "./DocumentReader.jsx";

import "./Document.css";

function Document ({currentDocument}){

    const documentString = currentDocument[0];
    const documentTitle = currentDocument[1];
    const documentStyle = currentDocument[2];

    return (

        <div className = "DocPage">
            <div className = "DocTitle">
                <DocumentReader
                    stringToParse = {documentTitle}
                    stringStyle={documentStyle}
                />
            </div>
            <hr className = "DocHeaderBreak"/>
            <div className = "DocTextContainer">
                <DocumentReader
                    stringToParse = {documentString}
                    stringStyle={documentStyle}
                />
            </div>
        </div>

    );

}


export default Document;