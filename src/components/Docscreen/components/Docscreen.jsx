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
            : ["", "Untitled", "0010", ""]
        );

    const editableRef = useRef();
    const handleChange = (evt) => {
        const newText = evt.target.value;
        // Uses html-formatted text:
        setCurrentDocument(prev => [newText, ...prev.slice(1)]);
 
    };



    const saveProgress = (newActiveDoc) => {

        const now = new Date();
        const timeDateString = "Saved at " + now.toLocaleTimeString() + " on " + now.toLocaleDateString();
        const updatedDateAndTime = [...currentDocument.slice(0, -1), timeDateString];

        if (ActiveDocument !== -1){

            let updatedDocs = [...Documents];
            updatedDocs[ActiveDocument] = updatedDateAndTime;

            const [updatedDoc] = updatedDocs.splice(ActiveDocument, 1);

            setDocuments([updatedDoc, ...updatedDocs]);

        } else {

            setDocuments(prev => [updatedDateAndTime, ...prev]);

        }

        setActiveDocument(newActiveDoc);

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

                    <h1 className = {`DocTitle DocStyle-${currentDocument[2][0]} DocColor-${currentDocument[2][1]} DocPage-${currentDocument[2][3]}`}> {currentDocument[1]} </h1>
                    <button className = "GeneralButton" onClick = {() => setOpenTitleFlag(true)}> Edit Title</button>

                    <ContentEditable
                        innerRef={editableRef}
                        html={currentDocument[0]}
                        onChange={handleChange}
                        tagName="div"
                        className={`DocPaper DocStyle-${currentDocument[2][0]} DocColor-${currentDocument[2][1]} DocSize-${currentDocument[2][2]} DocPage-${currentDocument[2][3]}`}
                    />

                    <div className = "DocNavButtonsContainer">
                        <button className = "GeneralButton" onClick = {() => saveProgress(0)}> Save </button>
                        <Link to="/home" className = "GeneralButton" onClick = {() => saveProgress(-1)}> Save + Exit </Link>
                        <Link to="/home" className = "GeneralButton" onClick = {() => deleteDocument()}> Delete </Link>
        
                    </div>

                </div>

            </div>
        </>
        
    );

}


export default Docscreen;