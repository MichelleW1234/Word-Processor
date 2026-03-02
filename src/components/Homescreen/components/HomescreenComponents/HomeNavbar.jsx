import { Link } from "react-router-dom";
import {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";

import {useFullDocumentDictionary} from "../../../../providers/FullDocumentDictionaryProvider.jsx";
import { useActiveDocument } from "../../../../providers/ActiveDocumentProvider.jsx";

import "./HomeNavbar.css";


function HomeNavBar (){

    const {FullDocumentDictionary} = useFullDocumentDictionary();
    const {setActiveDocument} = useActiveDocument();

    const [titleLookup, setTitleLookup] = useState("");
    const [matchingDocuments, setMatchingDocuments] = useState([])
    const [barIsActive, setBarIsActive] = useState(false);

    const editableRef = useRef(null);



    const handleChange = (evt) => {
        const newText = evt.target.value;
        const unformattedText = newText.replace(/<[^>]+>/g, "");

        // Uses non-html formatted text:
        setTitleLookup(unformattedText);
    
    };


    const findTitles = () => {

        setBarIsActive(true);

        const filteredDocuments = [];

        for (let i = 0; i<FullDocumentDictionary["Documents"].length; i++){

            if (FullDocumentDictionary["Documents"][i][1].toLowerCase().includes(titleLookup.toLowerCase())){

                filteredDocuments.push(i);

            }

        }

        setMatchingDocuments(filteredDocuments);

    }


    const closeSearchBar = () => {

        setBarIsActive(false);
        setTitleLookup("");
        setMatchingDocuments([]);

    }


    return (

        <>
            <div className = "NavBarContainer">

                <ContentEditable
                    innerRef={editableRef}
                    html={titleLookup}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                        }
                    }}
                    tagName="div"
                    className="HomeNavBarLookup"
                />

                {FullDocumentDictionary["Documents"].length > 0 ? (

                    <button className="NavBarButton" onClick = {() => findTitles()}> Find Document </button>

                ) : (

                    <button className="NavBarButtonPlaceHolder"> Find Document </button>

                )}
                
                <Link to="/trash" className="NavBarButton"> Go to Trash </Link>

            </div>

            {barIsActive ? (

                <div className = "HomeNavBarSuggestionsFlag">
                    <div className="HomeNavBarSuggestionsContainer">

                        {matchingDocuments.length === 0 ? (

                            <h1 className = "HomeNavBarNoSuggestions"> No results... </h1>

                        ) : (

                            FullDocumentDictionary["Documents"].map((___, index) => {

                                const finalTitle = FullDocumentDictionary["Documents"][index][1].length > 30 ? FullDocumentDictionary["Documents"][index][1].slice(0, 30) + "..." 
                                    : FullDocumentDictionary["Documents"][index][1];

                                return (

                                    matchingDocuments.includes(index) ? (

                                        <Link to="/document" className = "HomeNavBarSuggestionPage" key={index} onClick = {() => setActiveDocument(index)}> {finalTitle} </Link>

                                    ) : (

                                        null

                                    )
                                   
                                )
                            })

                        )}
                        
                    </div>

                    <button className = "HomeNavBarCloseButton" onClick = {() => closeSearchBar()}> Close </button>
                </div>

            ) : (

                null

            )}
        </>
                                    
    );

}


export default HomeNavBar;