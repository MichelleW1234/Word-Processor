import {useState, useRef, useEffect} from "react";
import { Link } from 'react-router-dom';

import DocTitleChanger from "./DocTitleChanger.jsx";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import { cursorLocationChange } from "../helpers/Helpers.js";

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
            : ["cur,", "0", "85,110,116,105,116,108,101,100,", "0"]
        );

    const currentDocumentRef = useRef(currentDocument);
    useEffect(() => {
        currentDocumentRef.current = currentDocument;
    }, [currentDocument]);


    const addText = (character) => {

        let copyDoc = [...currentDocumentRef.current];
        const newLetter = character.charCodeAt(0);

        let copyDocArray = copyDoc[0].split(","); 
        copyDocArray.splice(cursorLocation, 0, newLetter);
        let newCopyDoc = copyDocArray.join(",");

        let finalDoc = [...currentDocumentRef.current];
        finalDoc[0] = newCopyDoc;
        
        setCurrentDocument(finalDoc);

        cursorLocationChange(cursorLocation+1, finalDoc, setCurrentDocument, setCursorLocation);

    }

    const deleteText = () => {

        if (cursorLocation > 0){

            let copyDoc = [...currentDocumentRef.current];

            let copyDocArray = copyDoc[0].split(","); 
            copyDocArray.splice(cursorLocation-1, 1);
            let newCopyDoc = copyDocArray.join(",");

            let finalDoc = [...currentDocumentRef.current];
            finalDoc[0] = newCopyDoc;

            setCurrentDocument(finalDoc);

            cursorLocationChange(cursorLocation-1, finalDoc, setCurrentDocument, setCursorLocation);

        }

    }

    const saveProgress = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => {
                let newDocs = [...prev];
                newDocs[ActiveDocument] = currentDocumentRef.current;
                return newDocs;
            });

        } else {

            const newIndex = Documents.length;

            setDocuments(prev => [...prev, currentDocumentRef.current]);

            setActiveDocument(newIndex);

        }

    }


    const leaveDocument = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => {
                let newDocs = [...prev];
                newDocs[ActiveDocument] = currentDocumentRef.current;
                return newDocs;
            });

        } else {

            setDocuments(prev => [...prev, currentDocumentRef.current]);

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
                cursorLocation={cursorLocation}
                setCursorLocation = {setCursorLocation}
            />
            <button onClick = {()=> addText("A")}>Add text </button> {/* For testing purposes*/}
            <button onClick = {()=> deleteText()}>Delete text </button> {/* For testing purposes*/}
            <button  onClick = {() => saveProgress()}> Save </button>
        </div>
        
    );

}


export default Docscreen;