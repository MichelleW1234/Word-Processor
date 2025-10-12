import a from "../../../images/PixelFontUpperCase/A.svg";
import b from "../../../images/PixelFontUpperCase/B.svg";
import c from "../../../images/PixelFontUpperCase/C.svg";
import d from "../../../images/PixelFontUpperCase/D.svg";
import e from "../../../images/PixelFontUpperCase/E.svg";
import f from "../../../images/PixelFontUpperCase/F.svg";
import g from "../../../images/PixelFontUpperCase/G.svg";
import h from "../../../images/PixelFontUpperCase/H.svg";
import i from "../../../images/PixelFontUpperCase/I.svg";
import j from "../../../images/PixelFontUpperCase/J.svg";
import k from "../../../images/PixelFontUpperCase/K.svg";
import l from "../../../images/PixelFontUpperCase/L.svg";
import m from "../../../images/PixelFontUpperCase/M.svg";
import n from "../../../images/PixelFontUpperCase/N.svg";
import o from "../../../images/PixelFontUpperCase/O.svg";
import p from "../../../images/PixelFontUpperCase/P.svg";
import q from "../../../images/PixelFontUpperCase/Q.svg";
import r from "../../../images/PixelFontUpperCase/R.svg";
import s from "../../../images/PixelFontUpperCase/S.svg";
import t from "../../../images/PixelFontUpperCase/T.svg";
import u from "../../../images/PixelFontUpperCase/U.svg";
import v from "../../../images/PixelFontUpperCase/V.svg";
import w from "../../../images/PixelFontUpperCase/W.svg";
import x from "../../../images/PixelFontUpperCase/X.svg";
import y from "../../../images/PixelFontUpperCase/Y.svg";
import z from "../../../images/PixelFontUpperCase/Z.svg";

import "./Document.css";

function Document ({currentDocument}){

    const upperCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    const lowerCase = [];
    const numbers = [];
    const symbols = [[], [], []];

    const documentString = currentDocument[0];
    const documentStyle = currentDocument[1];

    return (

        <div className = "DocPage">
            <div className = "DocTextContainer">
                {documentString.split(",").filter(value => value !== "").map((char, index) => {

                    const asciiValue = Number(char);

                    return (

                        documentStyle.charAt(0) === "0" ? ( /* Plain text (not bold) */

                            97 <= asciiValue && asciiValue <= 122 ? (

                                <img className = "DocCharacter" key={index} src = {lowerCase[asciiValue-97]}/>

                            ) : 65 <= asciiValue && asciiValue <= 90 ? (

                                <img className = "DocCharacter" key={index} src = {upperCase[asciiValue-65]}/>

                            ) : 48 <= asciiValue && asciiValue <= 57 ? (

                                <img className = "DocCharacter" key={index} src = {numbers[asciiValue-48]}/>

                            ) : (

                                //change this to map to exact ascii values (since they're distributed everywhere)
                                <img className = "DocCharacter" key={index} src = {symbols[asciiValue]}/>

                            )

                        ) : (

                            null

                        )


                    )
                   
                })}
            </div>
        </div>

    );

}


export default Document;