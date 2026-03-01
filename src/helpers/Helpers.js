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


/*
export const MBCalculation = () => {
    
    let totalBytes = 0;

    for (let i = 0; i < localStorage.length; i++) {
        
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const valueBytes = MBSingleStringCalculation(value);

        // Account for key's bytes as well:
        totalBytes += valueBytes + key.length*2;

    }

    // Convert to bytes to MB:
    const size = totalBytes / MBDivisor;

    console.log(size);
    return size;

}
*/