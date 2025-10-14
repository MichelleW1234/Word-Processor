import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import "./DocToolBar.css";

function DocToolBar (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();


    return (

        <div className = "NavBarContainer">
            
        </div>

    );

}


export default DocToolBar;