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
            : []
        );

    const currentDocumentRef = useRef(currentDocument);
    useEffect(() => {
        currentDocumentRef.current = currentDocument;
    }, [currentDocument]);



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
                [newKey]: 
                [[1, "H".charCodeAt(0)-65], [1, "E".charCodeAt(0)-65], [1, "L".charCodeAt(0)-65], [1, "L".charCodeAt(0)-65], [1, "O".charCodeAt(0)-65]], //DELETE LATER AND REPLACE WITH  currentDocumentRef.current, !!!!!!
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