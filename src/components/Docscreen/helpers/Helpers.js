export const cursorLocationChange = (newLocationIndex, currentDocument, setCurrentDocument, setCursorLocation) => {

    let filteredDoc = currentDocument[0].replaceAll("cur,", "");

    let targetedDocArray = filteredDoc.split(","); 
    targetedDocArray.splice(newLocationIndex, 0, "cur");

    let newTargetedDoc = targetedDocArray.join(",");

    setCurrentDocument(prev => {
        let newDoc = [...prev];
        newDoc[0] = newTargetedDoc;
        return newDoc;
    });

    setCursorLocation(newLocationIndex);
    
}