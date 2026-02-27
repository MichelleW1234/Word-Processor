function MaxMBWarning ({setOpenMBWarningFlag}){

    return (

        <div className = "FullScreenFloatingFlag">

            <div className = "FullFlagContainer">
                <h3> Max MB size reached! Please shorten your document. </h3>

                <div className="FullFlagButtonContainer">
                    <button className = "FlagContainerButton" onClick = {() => setOpenMBWarningFlag(false)}> Close </button>
                </div>

            </div>
        </div>

    );

}


export default MaxMBWarning;