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



// MB checking:

export const MBAdditionChecker = (MBAdded) => {

    console.log("Trying to add: " + MBAdded);

    try {

        const dataSize = Math.floor(MBAdded * MBDivisor);
        const bufferSize = Math.floor(0.2 * MBDivisor);
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

    const bytes = stringValue.length*2;

    const size = bytes / MBDivisor;

    return size;

}