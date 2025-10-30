export const deleteDocument = (setTrash, setDocuments, indexToRemove, documentToRemove) => {

    setDocuments(prev => {
        return prev.filter((_, i) => i !== indexToRemove);
    });

    moveToTrash(documentToRemove, setTrash);

}

export const moveToTrash = (trashDocument, setTrash) => {

    trashDocument[3] = "Document Restored";

    setTrash( prev => {
        let newTrash = [trashDocument, ...prev];
        return newTrash;
    });

}