import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import "./Homescreen.css";

function Homescreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();
    

    const goToDocument = (keyToActivate) => {

        setActiveDocument(keyToActivate);

    }
    
    const deleteDocument = (keyToRemove) => {

        setDocuments(prevDocs => {
            const { [keyToRemove]: _, ...newDocsList } = prevDocs;
            return newDocsList;
        });

    }



    return (

        <div className = "HomescreenLayout">
            <div className = "HomescreenDocContainer">
                <Link to="/document" className = "HomeDocPageNew" > + </Link>
                {Object.entries(Documents).map(([key, page]) => {

                    const titleAsciiArray = Documents[key][1].split(",");
                    const titleStringFull = titleAsciiArray.map(v => String.fromCharCode(Number(v))).join("");
                    const finalTitle = titleStringFull.length > 40 ? titleStringFull.slice(0, 40) + "..." 
                                                                    : titleStringFull;
                                    
                    return (
                        <div className = "HomeDocPage" key={key}>
                            <div className = "HomeDocTitle">{finalTitle}</div>
                            <div className = "Options">
                                <Link to="/document" className = "HomeDocButton" onClick = {() => goToDocument(key)}> Go to Document</Link>
                                <button className = "HomeDocButton" onClick = {() => deleteDocument(key)}> Delete this Document </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}


export default Homescreen;