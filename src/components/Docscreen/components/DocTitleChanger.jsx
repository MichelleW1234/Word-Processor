import {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";

import "./DocTitleChanger.css";

function DocTitleChanger ({setOpenTitleFlag, currentDocument, setCurrentDocument}){

    const errorMessage = "Please shorten your title to 40 letters max.";

    const [newTitle, setNewTitle] = useState(currentDocument[2]);
    const [errorFlag, setErrorFlag] = useState(false);

    
    const editableRef = useRef();
    const handleChange = (evt) => {
        const newText = evt.target.value;
        const unformattedText = newText.replace(/<[^>]+>/g, "");

        // Uses non-html formatted text:
        setNewTitle(unformattedText);
    };



    const processNewTitle = () => {

        if (newTitle.length > 40) {

            setErrorFlag(true);

        } else {

            setErrorFlag(false);

            if (newTitle === ""){

                setCurrentDocument(prev => {
                    let newDocs = [...prev];
                    newDocs[2]="Untitled";
                    return newDocs;
                })

            } else {

                setCurrentDocument( prev => {
                    let newDocs = [...prev];
                    newDocs[2]= newTitle;
                    return newDocs;
                });

            }

            setOpenTitleFlag(false);

        }

    }

    return (

        <div className = "DocTitleChangerFloatingFlag">

            <div className = "DocTitleChangerBox">
                <h3>Enter your new title below:</h3>

                <ContentEditable
                    innerRef={editableRef}
                    html={newTitle}
                    onChange={handleChange}
                    tagName="div"
                    className="DocTitleChangerText"
                />

                <button className = "DocTitleChangerButton" onClick = {() => processNewTitle()}> Done </button>

                {errorFlag && errorMessage}

            </div>
        </div>

    );

}


export default DocTitleChanger;