import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

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

        <div className = "HomescreenLayout">
            <div className = "HomescreenDocContainer">
                <Link to="/document" className = "HomeDocPageNew" > + </Link>
                {Documents.map((page, index) => {

                    const titleAsciiArray = Documents[index][2].split(",");
                    const titleStringFull = titleAsciiArray.map(v => String.fromCharCode(Number(v))).join("");
                    const finalTitle = titleStringFull.length > 40 ? titleStringFull.slice(0, 40) + "..." 
                                                                    : titleStringFull;
                                    
                    return (
                        <div className = "HomeDocPage" key={index}>
                            <div className = "HomeDocTitle">{finalTitle}</div>
                            <div className = "Options">
                                <Link to="/document" className = "HomeDocButton" onClick = {() => goToDocument(index)}> Go to Document</Link>
                                <button className = "HomeDocButton" onClick = {() => deleteDocument(index)}> Delete this Document </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}


export default Homescreen;