import {useState, useRef, useEffect} from "react";
import { Link } from 'react-router-dom';

import DocTitleChanger from "./DocTitleChanger.jsx";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import Document from "./Document.jsx";

import "./Docscreen.css";

function Docscreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const [cursorLocation, setCursorLocation] = useState(0);
    const [openTitleFlag, setOpenTitleFlag] = useState(false);

    const [currentDocument, setCurrentDocument] = useState(
        ActiveDocument !== -1 
            ? Documents[ActiveDocument]
            : ["", "0", "Untitled", "0"]
        );


    const saveProgress = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => {
                let newDocs = [...prev];
                newDocs[ActiveDocument] = currentDocument;
                return newDocs;
            });

        } else {

            const newIndex = Documents.length;

            setDocuments(prev => [...prev, currentDocument]);

            setActiveDocument(newIndex);

        }

    }


    const leaveDocument = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => {
                let newDocs = [...prev];
                newDocs[ActiveDocument] = currentDocument;
                return newDocs;
            });

        } else {

            setDocuments(prev => [...prev, currentDocument]);

        }

        setActiveDocument(-1);

    }


    return (

        <div className = "DocscreenLayout">

            {openTitleFlag === true && 
            <DocTitleChanger
                setOpenTitleFlag = {setOpenTitleFlag}
                setCurrentDocument = {setCurrentDocument}
            />}

            <Link to="/home" className = "generalbuttonGlitch Enter" onClick = {() => leaveDocument()}> Back </Link>
            <Document
                setOpenTitleFlag = {setOpenTitleFlag}
                currentDocument = {currentDocument}
                setCurrentDocument = {setCurrentDocument}
            />
            <button  onClick = {() => saveProgress()}> Save </button>
        </div>
        
    );

}


export default Docscreen;