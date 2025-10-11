import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import "./Homescreen.css";

function Homescreen (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    return (

        <div className = "HomescreenLayout">
            <div className = "HomescreenContainer">
                <Link to="/document" className = "HomeDocPage"> + </Link>
                {Object.entries(Documents).map(([key, page]) => (
                    <Link to="/document" className = "HomeDocPage" key={key} onClick = {() => setActiveDocument(key)}> </Link>
                ))}
            </div>
        </div>

    );

}


export default Homescreen;