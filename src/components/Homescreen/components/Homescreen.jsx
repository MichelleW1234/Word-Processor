import { Link } from "react-router-dom";
import {useState} from "react";

import HomeMaxMBWarning from "./HomescreenComponents/HomeMaxMBWarning.jsx";
import HomeDeleteWarning from "./HomescreenComponents/HomeDeleteWarning.jsx";
import HomeNavBar from "./HomescreenComponents/HomeNavbar.jsx";

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";
import {useActiveDocument} from "../../../providers/ActiveDocumentProvider.jsx";

import { MBCalculation, MBSingleStringCalculation } from "../../../helpers/Helpers.js";
import { MBDivisor, MBLimit, newDoc } from "../../constants/Constants.js";

import "./Homescreen.css";



function Homescreen (){

    const {Documents} = useDocuments();
    const {setActiveDocument} = useActiveDocument();

    const [openHomeMBWarningFlag, setOpenHomeMBWarningFlag] = useState(false);
    const [openHomeDeleteWarningFlag, setOpenHomeDeleteWarningFlag] = useState(false);
    const [indexToDelete, setIndexToDelete] = useState(-1);

    const currentMB = MBCalculation();



    const newDocument = (e) => {

        const newStringMB = MBSingleStringCalculation(newDoc) / MBDivisor;

        if (currentMB + newStringMB >= MBLimit){

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
        
                {currentMB >= MBLimit ? (

                    <p className="HomescreenMBWarning"> Max storage limit of {MBLimit} MB reached. Shorten or delete documents or empty your trash to free up space. </p>
                
                ) : currentMB >= Math.floor(MBLimit) ? (

                    <p className="HomescreenMBWarning"> Storage almost full: {Math.floor(MBLimit)} MB of {MBLimit} MB used. Shorten or delete documents or empty your trash to free up space. </p>

                ) : (

                    <p className="HomescreenMBWarning"></p>

                )}
                    
                <div className = "HomescreenDocPagesContainer">
                    
                    <Link to="/document" className = "HomeDocPageNew" onClick = {(e) => newDocument(e)}> + </Link>
                    {Documents.map((___, index) => {

                        const finalTitle = Documents[index][1].length > 30 ? Documents[index][1].slice(0, 30) + "..." 
                                                                        : Documents[index][1];
                                        
                        return (
                            <div className = "HomeDocContainer" key={index}>
                                <div className = "HomeDocPage">
                                    <h1 className = "HomeDocTitle">{finalTitle}</h1>
                                    <div className = "Options">
                                        <Link to="/document" className = "HomeDocButton" onClick = {() => setActiveDocument(index)}> Go to Document</Link>
                                        <button className = "HomeDocButton" onClick = {() => deleteWarning(index)}> Delete </button>
                                    </div>
                                </div>
                                <p className = "HomeDocDateAndTime">{Documents[index][3]}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    );

}


export default Homescreen;