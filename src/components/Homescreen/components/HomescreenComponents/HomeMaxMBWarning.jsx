import { MBLimit } from "../../../constants/Constants";



function HomeMaxMBWarning ({setOpenHomeMBWarningFlag}){

    return (

        <div className = "FullScreenFloatingFlag">

            <div className = "FullFlagContainer">
                <h3> {MBLimit} MB storage limit reached. Free up Document and/or Trash space to continue. </h3>

                <div className="FullFlagButtonContainer">
                    <button className = "FlagContainerButton" onClick = {() => setOpenHomeMBWarningFlag(false)}> Close </button>
                </div>

            </div>
        </div>

    );

}


export default HomeMaxMBWarning;