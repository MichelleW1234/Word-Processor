import { MBDivisor } from "../components/constants/Constants";


export const moveToTrash = (trashDocument, indexToDelete, setDocuments, setTrash) => {

    if (indexToDelete !== -1) {

        setDocuments(prev => {
            return prev.filter((_, i) => i !== indexToDelete);
        });

    }

    trashDocument[3] = "Document Restored";

    setTrash( prev => {
        let newTrash = [trashDocument, ...prev];
        return newTrash;
    });

}



export const MBSingleStringCalculation = (input) => {

    let stringValue;

    if (typeof input === "string"){

        stringValue = input;

    } else {
    
        stringValue = JSON.stringify(input);

    }

    const bytes = stringValue.length;

    return bytes;

}


export const MBCalculation = () => {
    
    let totalBytes = 0;

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {

            const value = localStorage[key];
            const valueBytes = MBSingleStringCalculation(value);

            // Account for key's bytes as well:
            totalBytes += valueBytes + key.length;
        }
    }

    // Convert to bytes to MB:
    const size = totalBytes / MBDivisor;

    console.log(size);
    return size;

}