import { Link } from "react-router-dom";
import {useState} from "react";

import HomeMaxMBWarning from "./HomescreenComponents/HomeMaxMBWarning.jsx";
import HomeDeleteWarning from "./HomescreenComponents/HomeDeleteWarning.jsx";
import HomeNavBar from "./HomescreenComponents/HomeNavbar.jsx";

import {useFullDocumentDictionary} from "../../../providers/FullDocumentDictionaryProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";


import { MBAdditionChecker, MBSingleStringCalculation } from "../../../helpers/Helpers.js";
import { newDoc } from "../../constants/Constants.js";

import "./Homescreen.css";



function Homescreen (){

    const {FullDocumentDictionary} = useFullDocumentDictionary();
    const {setActiveDocument} = useActiveDocument();

    const [openHomeMBWarningFlag, setOpenHomeMBWarningFlag] = useState(false);
    const [openHomeDeleteWarningFlag, setOpenHomeDeleteWarningFlag] = useState(false);
    const [indexToDelete, setIndexToDelete] = useState(-1);

    const MBLimitNotReached = MBAdditionChecker(0);
    const MBLimitNotApproached = MBAdditionChecker(0.5);



    const newDocument = (e) => {

        const newStringMB = MBSingleStringCalculation(newDoc);

        if (MBAdditionChecker(newStringMB) === false){

            e.preventDefault();
            setOpenHomeMBWarningFlag(true);

        } else {

            setActiveDocument(-1);

        }

    }


    const deleteWarning = (index) => {

        setOpenHomeDeleteWarningFlag(true);
        setIndexToDelete(index);

    }



    return (

        <>

            {openHomeMBWarningFlag && 
            <HomeMaxMBWarning
                setOpenHomeMBWarningFlag = {setOpenHomeMBWarningFlag}
            />}
            
            {openHomeDeleteWarningFlag &&
            <HomeDeleteWarning 
                setOpenHomeDeleteWarningFlag={setOpenHomeDeleteWarningFlag} 
                indexToDelete = {indexToDelete}
                setIndexToDelete = {setIndexToDelete}
            />}

            <HomeNavBar/>

            <div className = "HomescreenLayout">
        
                {!MBLimitNotReached ? (

                    <p className="HomescreenMBWarning"> Max storage limit reached. Shorten or delete documents or empty your trash to free up space. </p>
                
                ) : !MBLimitNotApproached ? (

                    <p className="HomescreenMBWarning"> Storage almost full: &lt;0.5 MB remaining. Shorten or delete documents or empty your trash to free up space. </p>

                ) : (

                    <p className="HomescreenMBWarning"></p>

                )}
                    
                <div className = "HomescreenDocPagesContainer">
                    
                    <Link to="/document" className = "HomeDocPageNew" onClick = {(e) => newDocument(e)}> + </Link>
                    {FullDocumentDictionary["Documents"].map((___, index) => {

                        const finalTitle = FullDocumentDictionary["Documents"][index][1].length > 30 ? FullDocumentDictionary["Documents"][index][1].slice(0, 30) + "..." 
                                                                        : FullDocumentDictionary["Documents"][index][1];
                                        
                        return (
                            <div className = "HomeDocContainer" key={index}>
                                <div className = "HomeDocPage">
                                    <h1 className = "HomeDocTitle">{finalTitle}</h1>
                                    <div className = "Options">
                                        <Link to="/document" className = "HomeDocButton" onClick = {() => setActiveDocument(index)}> Go to Document</Link>
                                        <button className = "HomeDocButton" onClick = {() => deleteWarning(index)}> Delete </button>
                                    </div>
                                </div>
                                <p className = "HomeDocDateAndTime">{FullDocumentDictionary["Documents"][index][3]}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>

    );

}


export default Homescreen;