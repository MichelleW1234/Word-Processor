export const deleteDocument = (setDocuments, indexToRemove) => {

    setDocuments(prev => prev.filter((_, i) => i !== indexToRemove));

}