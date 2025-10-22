import {useState} from "react";

import DocFontStyleChanger from "./DocToolBarComponents/DocFontStyleChanger.jsx";

import "./DocToolBar.css";


function DocToolBar ({currentDocument, setCurrentDocument}){

    const allFonts = ["Pixel1", "Pixel2", "Pixel3"];
    const allColors = ["Black", "Red", "Orange", "Pink", "Yellow", "Green", "Blue", "Purple"];
    const allSizes = ["small", "medium", "large"];

    const [openFontFlag, setOpenFontFlag] = useState(false);
    const [openColorFlag, setOpenColorFlag] = useState(false);
    const [openSizeFlag, setOpenSizeFlag] = useState(false);

    return (

        <>
            {openFontFlag === true &&
                <DocFontStyleChanger
                    typeChanging = {0}
                    setOpenFlag = {setOpenFontFlag}
                    currentDocument = {currentDocument}
                    setCurrentDocument = {setCurrentDocument} 
                    allOptions = {allFonts}
                />
            }

            {openColorFlag === true &&
                <DocFontStyleChanger
                    typeChanging = {1}
                    setOpenFlag = {setOpenColorFlag}
                    currentDocument = {currentDocument}
                    setCurrentDocument = {setCurrentDocument} 
                    allOptions = {allColors}
                />
            }


            {openSizeFlag === true &&
                <DocFontStyleChanger
                    typeChanging = {2}
                    setOpenFlag = {setOpenSizeFlag}
                    currentDocument = {currentDocument}
                    setCurrentDocument = {setCurrentDocument} 
                    allOptions = {allSizes}
                />
            }

            <div className = "NavBarContainer">
                <div className="DocToolBarChangeContainer">
                    <div className="DocToolBarChangeBox">
                        <p> Font Type: </p>
                        <p className = {`DocToolBarOptionBox style-${allFonts[currentDocument[2][0]]}`}> {allFonts[currentDocument[2][0]]} </p>
                    </div>
                    <button className = "DocToolBarChangeButton" onClick={() => setOpenFontFlag(true)}> Change Font </button>
                </div>
                <div className="DocToolBarChangeContainer">
                    <div className="DocToolBarChangeBox">
                        <p> Font Color: </p>
                        <p className = {`DocToolBarColorBox color-${allColors[currentDocument[2][1]]}`}></p>
                    </div>
                    <button className = "DocToolBarChangeButton" onClick={() => setOpenColorFlag(true)}> Change Color </button>
                </div>
                <div className="DocToolBarChangeContainer">
                    <div className="DocToolBarChangeBox">
                        <p> Font Size: </p>
                        <p className = {`DocToolBarOptionBox size-${allSizes[currentDocument[2][2]]}`}>{allSizes[currentDocument[2][2]]}</p>
                    </div>
                    <button className = "DocToolBarChangeButton" onClick={() => setOpenSizeFlag(true)}> Change Size </button>
                </div>
                <button className="NavBarButton" onClick = {() => printDocument()}> Print Document </button>
            
            </div>
        </>

    );

}


export default DocToolBar;