
import { Link } from "react-router-dom";

import {useFullDocumentDictionary} from "../../../../providers/FullDocumentDictionaryProvider.jsx";
import {useActiveDocument} from "../../../../providers/ActiveDocumentProvider.jsx";

import { moveToTrash } from "../../../../helpers/Helpers.js";


function DocDeleteWarning ({setOpenDocDeleteWarningFlag, currentDocument}){

    const {FullDocumentDictionary, setFullDocumentDictionary} = useFullDocumentDictionary();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();



    const trash = () => {

        moveToTrash(currentDocument, ActiveDocument, FullDocumentDictionary, setFullDocumentDictionary);
        
        if (ActiveDocument !== -1){

            setActiveDocument(-1);

        }

    }

    

    return (

        <div className = "FullScreenFloatingFlag">

            <div className = "FullFlagContainer">
                <h3>Are you sure you want to move this document to Trash? </h3>

                <div className="FullFlagButtonContainer">
                    <Link to="/home" className = "FlagContainerButton" onClick = {() => trash()}> Yes </Link>
                    <button className = "FlagContainerButton" onClick = {() => setOpenDocDeleteWarningFlag(false)}> No </button>
                </div>

            </div>
        </div>

    );

}


export default DocDeleteWarning;