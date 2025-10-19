import {useState} from "react";

import "./DocToolBar.css";

function DocToolBar ({currentDocument, setCurrentDocument, allFonts, setOpenFontFlag, editableRef}){

    const [bold, setBold] = useState(false);

    return (

        <div className = "NavBarContainer">
            <div className="DocToolBarFontContainer">
                <div className="DocToolBarFontBox">
                    <p> Font Style: </p>
                    <p className = "DocToolBarFontSelected"> {allFonts[currentDocument[2][0]]} </p>
                </div>
                <button className = "DocToolBarFontButton" onClick={() => setOpenFontFlag(true)}> Change Font </button>
            </div>
            <div className = "DocToolBarButtonContainer">
                <button className="DocToolBarButton" > Color </button>
                <button className= "DocToolBarButton" onClick = {() => setBold(true)}> Bold </button>
                <button className="DocToolBarButton"> Underline </button>
                <button className="DocToolBarButton"> Italics </button>
                <button className="DocToolBarButton" onClick = {() => printDocument()}> Print Document </button>
            </div>
           
        </div>

    );

}


export default DocToolBar;