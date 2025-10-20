import {useState} from "react";

import "./DocFontStyleChanger.css";

function DocFontStyleChanger ({typeChanging, setOpenFlag, currentDocument, setCurrentDocument, allOptions}){

    const [selectedOption, setSelectedOption] = useState(currentDocument[2][typeChanging]);

    const selectOption = (index) => {

        setSelectedOption(String(index));

    }

    const done = () => {

        setCurrentDocument(prev => {
            let newDoc = [...prev];

            if (typeChanging === 0) {

                newDoc[2] = selectedOption + newDoc[2][1];

            } else {

                newDoc[2] = newDoc[2][0] + selectedOption;

            }

            return newDoc;
        });

        setOpenFlag(false);

    }

    return (

        <div className = "FullScreenFloatingFlag" >
            <div className="FontStyleChangerContainer">
                <h3> Select one of the options below: </h3>
                <div className="FontStyleChangerOptionsContainer">
                    {allOptions.map((option, index) => {

                        const picked = String(index) === selectedOption;

                        return (

                            picked === true ? (

                                <div className="FontStyleChangerOptionActive" key = {index}> {option} </div>

                            ) : (

                                <button className="FontStyleChangerOption" key = {index} onClick={()=> selectOption(index)}> {option} </button>


                            )

                        );

                    })}
                </div>
                <button className="FontStyleChangerDoneButton" onClick = {() => done()}> Done </button>
            </div>
        </div>

    );

}


export default DocFontStyleChanger;