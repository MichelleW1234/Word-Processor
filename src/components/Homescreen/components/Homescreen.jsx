import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import HomeNavBar from "./HomescreenComponents/HomeNavbar.jsx";

import "./Homescreen.css";

function Homescreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const goToDocument = (indexToActivate) => {

        setActiveDocument(indexToActivate);

    }
    
    const deleteDocument = (indexToRemove) => {

        setDocuments(prev => prev.filter((_, i) => i !== indexToRemove));

    }



    return (

        <>
        <HomeNavBar/>
        <div className = "HomescreenLayout">
    
            <div className = "HomescreenDocPagesContainer">
                <Link to="/document" className = "HomeDocPageNew" > + </Link>
                {Documents.map((page, index) => {

                    const finalTitle = Documents[index][2].length > 30 ? Documents[index][2].slice(0, 30) + "..." 
                                                                    : Documents[index][2];
                                    
                    return (
                        <div className = "HomeDocContainer" key={index}>
                            <div className = "HomeDocPage">
                                <h1 className = "HomeDocTitle">{finalTitle}</h1>
                                <div className = "Options">
                                    <Link to="/document" className = "HomeDocButton" onClick = {() => goToDocument(index)}> Go to Document</Link>
                                    <button className = "HomeDocButton" onClick = {() => deleteDocument(index)}> Delete </button>
                                </div>
                            </div>
                            <p className = "HomeDocDateAndTime">{Documents[index][4]}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>

    );

}


export default Homescreen;