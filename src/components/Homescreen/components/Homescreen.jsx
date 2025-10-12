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
            <div className = "HomescreenContainer">
                <Link to="/document" className = "HomeDocPageNew" > + </Link>
                {Object.entries(Documents).map(([key, page]) => (
                    <div className = "HomeDocPage" key={key}>
                        <Link to="/document" className = "HomeDocButton" onClick = {() => goToDocument(key)}> Go to Document</Link>
                        <button className = "HomeDocButton" onClick = {() => deleteDocument(key)}> Delete this Document </button>
                    </div>
                ))}
            </div>
        </div>

    );

}


export default Homescreen;