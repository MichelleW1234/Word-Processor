import {useState, useRef, useEffect} from "react";
import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import Document from "./Document.jsx";

import "./Docscreen.css";

function Docscreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const [currentDocument, setCurrentDocument] = useState(
        ActiveDocument !== -1 && Documents[ActiveDocument] 
            ? Documents[ActiveDocument]
            : ["", "85,110,116,105,116,108,101,100,","0"]
        );

    const currentDocumentRef = useRef(currentDocument);
    useEffect(() => {
        currentDocumentRef.current = currentDocument;
    }, [currentDocument]);



    const addText = (character) => {

        const newLetter = character.charCodeAt(0) + ",";

        setCurrentDocument(prev => {
            const newDoc = [...prev];
            newDoc[0] = newDoc[0] + newLetter;
            return newDoc;
        });

    }

    const deleteText = () => {

        const textLength = currentDocumentRef.current[0].split(",").length - 1;

        if (textLength > 1){

            const lastCommaIndex = currentDocumentRef.current[0].lastIndexOf(",");
            const secondLastCommaIndex = currentDocumentRef.current[0].lastIndexOf(",", lastCommaIndex - 1);

            setCurrentDocument(prev => {
                const newDoc = [...prev];
                newDoc[0] = newDoc[0].slice(0, secondLastCommaIndex + 1);
                return newDoc;
            });

        } else {

            setCurrentDocument(prev => {
                const newDoc = [...prev];
                newDoc[0] = "";
                return newDoc;
            });

        }

    }


    const saveProgress = () => {

        if (ActiveDocument !== -1){

            setDocuments(prev => ({
                ...prev,
                [ActiveDocument]: currentDocumentRef.current,
            }));

            setActiveDocument(-1);

        } else {

            const newKey = Object.keys(Documents).length;

            setDocuments(prev => ({
                ...prev,
                [newKey]: currentDocumentRef.current,
            }));

        }

    }

    return (

        <div className = "DocscreenLayout">
            <Link to="/home" className = "generalbuttonGlitch Enter"  onClick = {() => saveProgress()}> Back </Link>
            <Document
                currentDocument = {currentDocument}
            />
        </div>
    );

}


export default Docscreen;