import {useFullDocumentDictionary} from "../../../../providers/FullDocumentDictionaryProvider.jsx";

import { moveToTrash } from "../../../../helpers/Helpers.js";


function HomeDeleteWarning ({setOpenHomeDeleteWarningFlag, indexToDelete, setIndexToDelete}){

    const {FullDocumentDictionary, setFullDocumentDictionary} = useFullDocumentDictionary();
    
    

    const trash = () => {

        moveToTrash(FullDocumentDictionary["Documents"][indexToDelete], indexToDelete, FullDocumentDictionary, setFullDocumentDictionary);
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