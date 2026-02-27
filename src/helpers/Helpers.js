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



export const MBCalculation = () => {
    
    let totalBytes = 0;

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {

            const value = localStorage[key];
            let bytes = 0;

            // Match all base64 images inside <img src="data:image/..."> tags
            const imgRegex = /<img src=\\"data:image\/[a-zA-Z]+;base64,([^"]+)\\"/g;

            // Stops at each location within a key where an image is located to account for the bytes it takes up:
            let imageValue = imgRegex.exec(value);
            while (imageValue !== null) {

                bytes += Math.ceil((imageValue[1].length * 3) / 4);
                imageValue = imgRegex.exec(value);

            }

            // Add any remaining string content's bytes:
            const stringValue = value.replace(imgRegex, '');
            bytes += stringValue.length * 2;

            // Account for key's bytes as well:
            totalBytes += bytes + key.length * 2;
        }
    }

    // Convert to bytes to MB:
    const size = totalBytes / (1024 * 1024);

    return size;

}