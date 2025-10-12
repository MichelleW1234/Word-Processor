import DocumentReader from "./DocumentReader.jsx";

import "./Document.css";

function Document ({currentDocument}){

    const documentString = currentDocument[0];
    const documentStringStyle = currentDocument[1];
    const documentTitle = currentDocument[2];
    const documentTitleStyle = currentDocument[3];

    return (

        <div className = "DocPage">
            <div className = "DocTitle">
                <DocumentReader
                    stringToParse = {documentTitle}
                    stringStyle={documentTitleStyle}
                />
            </div>
            <hr className = "DocHeaderBreak"/>
            <div className = "DocTextContainer">
                <DocumentReader
                    stringToParse = {documentString}
                    stringStyle={documentStringStyle}
                />
            </div>
        </div>

    );

}


export default Document;