import { Link } from 'react-router-dom';
import {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";

import DocTitleChanger from "./DocTitleChanger.jsx";
import DocToolBar from "./DocToolBar.jsx";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import "./Docscreen.css";

function Docscreen (){

    const now = new Date();
    const timeDateString = "Opened at " + now.toLocaleTimeString() + " on " + now.toLocaleDateString();

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const [openTitleFlag, setOpenTitleFlag] = useState(false);
    const [currentDocument, setCurrentDocument] = useState(
        ActiveDocument !== -1 
            ? [...Documents[ActiveDocument].slice(0, -1), timeDateString]
            : ["", "0", "Untitled", "0", timeDateString]
        );

    const editableRef = useRef();
    const handleChange = (evt) => {
        const newText = evt.target.value;

        // Uses html-formatted text:
        setCurrentDocument(prev => [newText, ...prev.slice(1)]);
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
            <DocToolBar
                currentDocument = {currentDocument}
                setCurrentDocument = {setCurrentDocument}
            />
            
            <div className = "DocscreenLayout">

                {openTitleFlag === true && 
                <DocTitleChanger
                    setOpenTitleFlag = {setOpenTitleFlag}
                    currentDocument={currentDocument}
                    setCurrentDocument = {setCurrentDocument}
                />}

                <div className = "DocComponentsContainer">

                    <div className = "DocTitleContainer">
                        <h1 className = "DocTitle"> {currentDocument[2]} </h1>
                        <button className = "DocButton" onClick = {() => setOpenTitleFlag(true)}> Edit Title</button>
                    </div>

                    <ContentEditable
                        innerRef={editableRef}
                        html={currentDocument[0]}
                        onChange={handleChange}
                        tagName="div"
                        className="DocPaper"
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