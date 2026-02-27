import {useDocuments} from "../../../../providers/DocumentsProvider.jsx";
import {useTrash} from "../../../../providers/TrashProvider.jsx";

import { moveToTrash } from "../../../../helpers/Helpers.js";


function HomeDeleteWarning ({setOpenHomeDeleteWarningFlag, indexToDelete, setIndexToDelete}){

    const {Documents, setDocuments} = useDocuments();
    const {setTrash} = useTrash();
    
    const trash = () => {

        moveToTrash(Documents[indexToDelete], indexToDelete, setDocuments, setTrash);
        setIndexToDelete(-1);
        setOpenHomeDeleteWarningFlag(false);

    }


    const noTrash = () => {

        setIndexToDelete(-1);
        setOpenHomeDeleteWarningFlag(false);

    }

    return (

        <div className = "FullScreenFloatingFlag">

            <div className = "FullFlagContainer">
                <h3>Are you sure you want to move this document to Trash?</h3>

                <div className="FullFlagButtonContainer">
                    <button className = "FlagContainerButton" onClick = {() => trash()}> Yes </button>
                    <button className = "FlagContainerButton" onClick = {() => noTrash()}> No </button>
                </div>

            </div>
        </div>

    );

}


export default HomeDeleteWarning;