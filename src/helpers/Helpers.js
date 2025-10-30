export const deleteDocument = (setTrash, Documents, setDocuments, indexToRemove) => {

    const removedDocument = Documents[indexToRemove];

    setDocuments(prev => {
        return prev.filter((_, i) => i !== indexToRemove);
    });

    moveToTrash(removedDocument, setTrash);

}

export const moveToTrash = (trashDocument, setTrash) => {

    trashDocument[3] = "restored";

    setTrash( prev => {
        let newTrash = [trashDocument, ...prev];
        return newTrash;
    });

}