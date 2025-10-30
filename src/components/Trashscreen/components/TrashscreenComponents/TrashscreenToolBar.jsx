import {useDocuments} from "../../../../providers/DocumentsProvider.jsx";
import {useTrash} from "../../../../providers/TrashProvider.jsx";

import "./TrashscreenToolBar.css";

function TrashscreenToolBar ({selected, setSelected}){

    const {Documents, setDocuments} = useDocuments();
    const {Trash, setTrash} = useTrash();

    const restore = () => {
    
        setTrash(prev => {
            return prev.filter((_, i) => !selected.includes(i));
        });
    
        const restoredDocuments = Trash.filter((_, i) =>
            selected.includes(i)
        );

        setDocuments(prev => {

            let updatedDocs = [...prev, ...restoredDocuments];
            return updatedDocs;

        });

        setSelected([]);

    }

    const deletePermanently = () => {

        setTrash(prev => {
            return prev.filter((_, i) => !selected.includes(i));
        });

        setSelected([]);

    }

    const emptyTrash = () => {

        setTrash([]);
        setSelected([]);

    }


    return (

        <div className = "NavBarContainer">

            {selected.length > 0 ? (

                <>
                    <button className = "NavBarButton" onClick = {() => restore()}> Restore </button>
                    <button className = "NavBarButton"  onClick = {() => deletePermanently()}> Delete Permanently </button>
                </>

            ) : (

                <>
                    <div className = "buttonPlaceHolder" > Restore </div>
                    <div className = "buttonPlaceHolder" > Delete Permanently </div>
                </>

            )}

            <button className = {Trash.length > 0 ? "NavBarButton" : "buttonPlaceHolder"}  onClick = {() => emptyTrash()}> Empty Trash </button>

        </div>

    );

}


export default TrashscreenToolBar;