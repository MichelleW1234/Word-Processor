import { MBDivisor } from "../components/constants/Constants";


export const moveToTrash = (trashDocument, indexToDelete, FullDocumentDictionary, setFullDocumentDictionary) => {
    
    const updatedDocumentDict = {
        "Documents": FullDocumentDictionary["Documents"].map(doc => [...doc]),
        "Trash": FullDocumentDictionary["Trash"].map(doc => [...doc]),
    };
    
    if (indexToDelete !== -1) {

        updatedDocumentDict["Documents"] = updatedDocumentDict["Documents"].filter(
            (_, i) => i !== indexToDelete
        );

    }

    trashDocument[3] = "Document Restored";

    updatedDocumentDict["Trash"] = [trashDocument, ...updatedDocumentDict["Trash"]];

    setFullDocumentDictionary(updatedDocumentDict);

}




// MB checking:

export const MBAdditionChecker = (MBAdded) => {

    console.log("Trying to add: " + MBAdded);

    try {

        const dataSize = MBAdded * MBDivisor;
        const bufferSize = 0.2 * MBDivisor;
        const testData = "0".repeat(bufferSize + dataSize);

        localStorage.setItem("test", testData);

    } catch (error) {

        console.log("unsafe");

        return false;

    } finally {

        localStorage.removeItem("test");

    }

    console.log("safe");

    return true;


}


export const MBSingleStringCalculation = (input) => {
    
    let stringValue;

    if (typeof input === "string"){

        stringValue = input;

    } else {
    
        stringValue = JSON.stringify(input);

    }

    const bytes = new Blob([stringValue]).size;
    const size = bytes / MBDivisor;

    return size;

}