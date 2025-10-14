import { Link } from 'react-router-dom';
import {useState, useRef} from "react";
import ContentEditable from "react-contenteditable";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import { useActiveDocument } from '../../../providers/ActiveDocumentProvider.jsx';

import "./HomeNavbar.css";


function HomeNavBar (){

    const {Documents, setDocuments} = useDocuments();
    const {ActiveDocument, setActiveDocument} = useActiveDocument();

    const [titleLookup, setTitleLookup] = useState("");
    const [matchingTitles, setMatchingTitles] = useState([])
    const [barIsActive, setBarIsActive] = useState(false);

    const editableRef = useRef();
    const handleChange = (evt) => {
        const newText = evt.target.value;
        const unformattedText = newText.replace(/<[^>]+>/g, "");

        // Uses non-html formatted text:
        setTitleLookup(unformattedText);
    
    };



    const findTitles = () => {

        setBarIsActive(true);
        const allDocTitles = Documents.map(innerArray => innerArray[2]);
        const filteredTitles = allDocTitles.filter(el => el.toLowerCase().includes(titleLookup.toLowerCase()));
        setMatchingTitles(filteredTitles);


    }

    const getDocument = (documentTitle) => {

        const index = Documents.findIndex(innerArray => 
            innerArray.includes(documentTitle)
        );

        setActiveDocument(index);

    }

    const closeSearchBar = () => {

        setBarIsActive(false);
        setTitleLookup("");

    }

    
    return (

        <>
        <div className = "HomeNavBarContainer">

            <ContentEditable
                innerRef={editableRef}
                html={titleLookup}
                onChange={handleChange}
                tagName="div"
                className="HomeNavBarLookup"
            />

            <button className="HomeNavBarButton" onClick = {() => findTitles()}> Find Document </button>

        </div>

        {barIsActive === true ? (

            <div className = "HomeNavBarSuggestionContainer">
                <div>
                    {matchingTitles.map((title, index) => {
                        return (
                            <Link to="/document" key={index} className = "HomeNavBarSuggestion" onClick = {() => getDocument(title)}>
                                <h3>{title}</h3>
                            </Link>
                        )
                    })}
                </div>

                <button className = "HomeNavBarButton" onClick = {() => closeSearchBar()}> Close </button>
            </div>

        ) : (

            null

        )}

        </>

                                    
    );

}


export default HomeNavBar;