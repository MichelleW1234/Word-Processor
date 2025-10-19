import {useState} from "react";

import "./DocFontChanger.css";

function FontChanger ({setOpenFontFlag, currentDocument, setCurrentDocument, allFonts}){

    const [selectedFont, setSelectedFont] = useState(currentDocument[2][0]);

    const selectOption = (index) => {

        setSelectedFont(String(index));

    }

    const done = () => {

        setCurrentDocument(prev => {
            let newDoc = [...prev];
            newDoc[2] = selectedFont + newDoc[2].slice(1);
            return newDoc;
        });

        setOpenFontFlag(false);

    }

    return (

        <div className = "FullScreenFloatingFlag" >
            <div className="FontChangerContainer">
                <h3> Select one of the fonts below: </h3>
                <div className="FontChangerOptionsContainer">
                    {allFonts.map((font, index) => {

                        const picked = String(index) === selectedFont;

                        return (

                            picked === true ? (

                                <div className="FontChangerOptionActive" key = {index}> {font} </div>

                            ) : (

                                <button className="FontChangerOption" key = {index} onClick={()=> selectOption(index)}> {font} </button>


                            )

                        );

                    })}
                </div>
                <button className="FontChangerDoneButton" onClick = {() => done()}> Done </button>
            </div>
        </div>

    );

}


export default FontChanger;