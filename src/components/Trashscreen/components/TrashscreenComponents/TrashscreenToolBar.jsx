import {useFullDocumentDictionary} from "../../../../providers/FullDocumentDictionaryProvider.jsx";


function TrashscreenToolBar ({selected, setSelected}){

    const {FullDocumentDictionary, setFullDocumentDictionary} = useFullDocumentDictionary();
    


    const restore = () => {

        const updatedDocumentDict = {
            "Documents": FullDocumentDictionary["Documents"].map(doc => [...doc]),
            "Trash": FullDocumentDictionary["Trash"].map(doc => [...doc]),
        };
    
        updatedDocumentDict["Trash"] = updatedDocumentDict["Trash"].filter(
            (_, i) => !selected.includes(i)
        );
    
        const restoredDocuments = FullDocumentDictionary["Trash"].filter((_, i) =>
            selected.includes(i)
        );

        updatedDocumentDict["Documents"] = [...updatedDocumentDict["Documents"], ...restoredDocuments];

        setFullDocumentDictionary(updatedDocumentDict);

        setSelected([]);

    }

    const deletePermanently = () => {

        const updatedDocumentDict = {
            "Documents": [...FullDocumentDictionary["Documents"]],
            "Trash": FullDocumentDictionary["Trash"].map(doc => [...doc]),
        };

        updatedDocumentDict["Trash"] = updatedDocumentDict["Trash"].filter(
            (_, i) => !selected.includes(i)
        );

        setFullDocumentDictionary(updatedDocumentDict);

        setSelected([]);

    }

    const emptyTrash = () => {

        const updatedDocumentDict = {
            "Documents": [...FullDocumentDictionary["Documents"]],
            "Trash": [],
        };

        setFullDocumentDictionary(updatedDocumentDict);

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
                    <div className = "NavBarButtonPlaceHolder" > Restore </div>
                    <div className = "NavBarButtonPlaceHolder" > Delete Permanently </div>
                </>

            )}

            <button className = {FullDocumentDictionary["Trash"].length > 0 ? "NavBarButton" : "NavBarButtonPlaceHolder"}  onClick = {() => emptyTrash()}> Empty Trash </button>

        </div>

    );

}


export default TrashscreenToolBar;