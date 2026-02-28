import { MBLimit } from "../../../constants/Constants";


function DocMaxMBWarning ({setOpenDocMBWarningFlag}){

    return (

        <div className = "FullScreenFloatingFlag">

            <div className = "FullFlagContainer">
                <h3> Document exceeds {MBLimit} MB storage limit. Shorten it before continuing. </h3>

                <div className="FullFlagButtonContainer">
                    <button className = "FlagContainerButton" onClick = {() => setOpenDocMBWarningFlag(false)}> Close </button>
                </div>

            </div>
        </div>

    );

}


export default DocMaxMBWarning;