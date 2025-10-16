import {useState} from "react";

import "./DocToolBar.css";

function DocToolBar ({currentDocument, setCurrentDocument}){

    const [selectedFont, setSelectedFont] = useState(currentDocument[3][0]);
    const handleChange = (e) => {
        setSelectedFont(e.target.value);
    };

    return (

        <div className = "NavBarContainer">
            <div className="DocToolBarFontContainer">
                <label htmlFor="font"> Font Style: </label>
                <select id="font" className="DocToolBarFontDropDown" value={selectedFont} onChange={handleChange}>
                    <option value="0" > Pixel1 </option>
                    <option value="1"> Pixel2 </option>
                    <option value="2"> Pixel3 </option>
                </select>
            </div>
            <div className = "DocToolBarButtonContainer">
                <button className="DocToolBarButton"> Color </button>
                <button className="DocToolBarButton"> Bold </button>
                <button className="DocToolBarButton"> Underline </button>
                <button className="DocToolBarButton"> Italics </button>
            </div>
        </div>

    );

}


export default DocToolBar;