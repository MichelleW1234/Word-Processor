import { Link } from 'react-router-dom';
import {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";

import DocTitleChanger from "./DocscreenComponents/DocTitleChanger.jsx";
import DocToolBar from "./DocscreenComponents/DocToolBar.jsx";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import "./Docscreen.css";

function Docscreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const [openTitleFlag, setOpenTitleFlag] = useState(false);

    const [currentDocument, setCurrentDocument] = useState(
        ActiveDocument !== -1 
            ? Documents[ActiveDocument]
            : ["", "Untitled", "001", ""]
        );

    const editableRef = useRef();
    const handleChange = (evt) => {
        const newText = evt.target.value;
        // Uses html-formatted text:
        setCurrentDocument(prev => [newText, ...prev.slice(1)]);
 
    };

    const handlePaste = (evt) => {
        evt.preventDefault();

        // Get HTML or plain text from clipboard
        let pasted = evt.clipboardData.getData("text/html") || evt.clipboardData.getData("text/plain");

        const newText = "<div span = >" + pasted + prev[0] + "</div>"
        // Uses html-formatted text:
        setCurrentDocument(prev => [pasted + prev[0], ...prev.slice(1)]);
 
    };



    const saveProgress = () => {

        const now = new Date();
        const timeDateString = "Saved at " + now.toLocaleTimeString() + " on " + now.toLocaleDateString();
        const updatedDateAndTime = [...currentDocument.slice(0, -1), timeDateString];

        if (ActiveDocument !== -1){

            let copyDocs = [...Documents];
            const filteredDocuments = copyDocs.filter((_, i) => i !== ActiveDocument);
            setDocuments([updatedDateAndTime, ...filteredDocuments]);

        } else {

            setDocuments(prev => [updatedDateAndTime, ...prev]);
            setActiveDocument(0);

        }

    }

    const leaveDocument = () => {

        const now = new Date();
        const timeDateString = "Saved at " + now.toLocaleTimeString() + " on " + now.toLocaleDateString();
        const updatedDateAndTime = [...currentDocument.slice(0, -1), timeDateString];

        if (ActiveDocument !== -1){

            let copyDocs = [...Documents];
            const filteredDocuments = copyDocs.filter((_, i) => i !== ActiveDocument);
            setDocuments([updatedDateAndTime, ...filteredDocuments]);

        } else {

            setDocuments(prev => [updatedDateAndTime, ...prev]);

        }

        setActiveDocument(-1);

    }


    const deleteDocument = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => prev.filter((_, i) => i !== ActiveDocument));
            setActiveDocument(-1);

        }

    }


    return (

        <>

            {openTitleFlag === true &&
            <DocTitleChanger
                setOpenTitleFlag = {setOpenTitleFlag}
                currentDocument={currentDocument}
                setCurrentDocument = {setCurrentDocument}
            />}

            <DocToolBar
                currentDocument = {currentDocument}
                setCurrentDocument = {setCurrentDocument}
            />
            
            <div className = "DocscreenLayout">

                <div className = "DocComponentsContainer">

                    <div className = "DocTitleContainer">
                        <h1 className = {`DocTitle style-${currentDocument[2][0]} color-${currentDocument[2][1]}`}> {currentDocument[1]} </h1>
                        <button className = "DocButton" onClick = {() => setOpenTitleFlag(true)}> Edit Title</button>
                    </div>

                    <ContentEditable
                        innerRef={editableRef}
                        html={currentDocument[0]}
                        onChange={handleChange}
                        onPaste = {handlePaste}
                        tagName="div"
                        className={`DocPaper style-${currentDocument[2][0]} color-${currentDocument[2][1]} size-${currentDocument[2][2]}`}
                    />

                    <div className = "DocNavButtonsContainer">
                        <button className = "DocButton" onClick = {() => saveProgress()}> Save </button>
                        <Link to="/home" className = "DocButton" onClick = {() => leaveDocument()}> Save + Exit </Link>
                        <Link to="/home" className = "DocButton" onClick = {() => deleteDocument()}> Delete </Link>
        
                    </div>

                </div>

            </div>
        </>
        
    );

}


export default Docscreen;