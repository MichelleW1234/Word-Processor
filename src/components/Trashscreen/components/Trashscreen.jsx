import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useTrash} from "../../../providers/TrashProvider.jsx";

import "./Trashscreen.css";

function Trashscreen (){

    const {Documents, setDocuments} = useDocuments();
    const {Trash, setTrash} = useTrash();

    const restore = (indexToRestore) => {

        const restoredDocument = Trash[indexToRestore];
    
        setTrash(prev => {
            return prev.filter((_, i) => i !== indexToRestore);
        });
    
        setDocuments(prev => {

            let updatedDocs = [...prev, restoredDocument];
            return updatedDocs;

        })

    }

    const deletePermanently = (indexToDelete) => {

        setTrash(prev => {
            return prev.filter((_, i) => i !== indexToDelete);
        });

    }

    const emptyTrash = () => {

        setTrash([]);

    }


    return (

        <div className = "TrashscreenLayout">
            <div className = "TrashOptionsContainer">

                {Trash.length == 0 ? (

                    <h1>Trash is empty.</h1>
                
                ): (

                    Trash.map((page, index) => {

                        const finalTitle = Trash[index][1].length > 30 ? Trash[index][1].slice(0, 30) + "..." 
                            : Trash[index][1];

                        return (

                            <div className = "TrashOptionPage" key = {index} > 
                                <h1 className="TrashOptionTitle">{finalTitle}</h1>
                                <div className="Options">
                                    <button className = "TrashOptionButton" onClick = {() => restore(index)}> Restore </button>
                                    <button className = "TrashOptionButton" onClick = {() => deletePermanently(index)}> Delete Permanently </button>
                                </div>
                            </div>

                        )

                    })

                )}
            </div>

            <div className="GeneralButtonsContainer">
                <button className="GeneralButton" onClick = {() => emptyTrash()}> Empty Trash </button>
                <Link to = "/home" className="GeneralButton"> Back to Home </Link>
            </div>
        </div>

    );

}


export default Trashscreen;