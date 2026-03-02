import { Link } from "react-router-dom";
import {useState} from "react";

import {useFullDocumentDictionary} from "../../../providers/FullDocumentDictionaryProvider.jsx";

import TrashscreenToolBar from "./TrashscreenComponents/TrashscreenToolBar.jsx";

import "./Trashscreen.css";

function Trashscreen (){

    const {FullDocumentDictionary} = useFullDocumentDictionary();
    
    const [selected, setSelected] = useState([]);
    

    
    const editSelected = (index) => {

        if (selected.includes(index)){

            setSelected(prev => prev.filter(item => item !== index));

        } else {

            setSelected(prev => [...prev, index]);

        }

    }


    
    return (    

        <>
            <TrashscreenToolBar
                selected = {selected}
                setSelected = {setSelected}
            />
            <div className = "TrashscreenLayout">
                <div className = "TrashOptionsContainer">

                    {FullDocumentDictionary["Trash"].length == 0 ? (

                        <h1 className = "TrashEmptyMessage">Trash is empty.</h1>
                    
                    ): (

                        FullDocumentDictionary["Trash"].map((___, index) => {

                            const finalTitle = FullDocumentDictionary["Trash"][index][1].length > 30 ? FullDocumentDictionary["Trash"][index][1].slice(0, 30) + "..." 
                                : FullDocumentDictionary["Trash"][index][1];

                            return (

                                <div className = {selected.includes(index) ? "TrashOptionPageActive" : "TrashOptionPage"} key = {index} onClick = {() => editSelected(index)}> {finalTitle} </div>

                            )

                        })

                    )}
                </div>

                <div className="GeneralButtonsContainer">
                    <Link to = "/home" className="GeneralButton"> Back to Home </Link>
                </div>
            </div>
        </>

    );

}


export default Trashscreen;