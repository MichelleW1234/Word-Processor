import { Link } from 'react-router-dom';

import {useDocuments} from "../../../providers/DocumentsProvider.jsx";

import "./Trashscreen.css";

function Trashscreen (){

    const {Documents, setDocuments} = useDocuments();

    return (

        <div className = "TrashscreenLayout">
            Hello
            <Link to = "/home" className="GeneralButton"> Back </Link>
        </div>

    );

}


export default Trashscreen;