/*
import a from "../../../images/PixelFontLowerCase/a.svg";
import b from "../../../images/PixelFontLowerCase/b.svg";
import c from "../../../images/PixelFontLowerCase/c.svg";
import d from "../../../images/PixelFontLowerCase/d.svg";
import e from "../../../images/PixelFontLowerCase/e.svg";
import f from "../../../images/PixelFontLowerCase/f.svg";
import g from "../../../images/PixelFontLowerCase/g.svg";
import h from "../../../images/PixelFontLowerCase/h.svg";
import i from "../../../images/PixelFontLowerCase/i.svg";
import j from "../../../images/PixelFontLowerCase/j.svg";
import k from "../../../images/PixelFontLowerCase/k.svg";
import l from "../../../images/PixelFontLowerCase/l.svg";
import m from "../../../images/PixelFontLowerCase/m.svg";
import n from "../../../images/PixelFontLowerCase/n.svg";
import o from "../../../images/PixelFontLowerCase/o.svg";
import p from "../../../images/PixelFontLowerCase/p.svg";
import q from "../../../images/PixelFontLowerCase/q.svg";
import r from "../../../images/PixelFontLowerCase/r.svg";
import s from "../../../images/PixelFontLowerCase/s.svg";
import t from "../../../images/PixelFontLowerCase/t.svg";
import u from "../../../images/PixelFontLowerCase/u.svg";
import v from "../../../images/PixelFontLowerCase/v.svg";
import w from "../../../images/PixelFontLowerCase/w.svg";
import x from "../../../images/PixelFontLowerCase/x.svg";
import y from "../../../images/PixelFontLowerCase/y.svg";
import z from "../../../images/PixelFontLowerCase/z.svg";

import A from "../../../images/PixelFontUpperCase/A.svg";
import B from "../../../images/PixelFontUpperCase/B.svg";
import C from "../../../images/PixelFontUpperCase/C.svg";
import D from "../../../images/PixelFontUpperCase/D.svg";
import E from "../../../images/PixelFontUpperCase/E.svg";
import F from "../../../images/PixelFontUpperCase/F.svg";
import G from "../../../images/PixelFontUpperCase/G.svg";
import H from "../../../images/PixelFontUpperCase/H.svg";
import I from "../../../images/PixelFontUpperCase/I.svg";
import J from "../../../images/PixelFontUpperCase/J.svg";
import K from "../../../images/PixelFontUpperCase/K.svg";
import L from "../../../images/PixelFontUpperCase/L.svg";
import M from "../../../images/PixelFontUpperCase/M.svg";
import N from "../../../images/PixelFontUpperCase/N.svg";
import O from "../../../images/PixelFontUpperCase/O.svg";
import P from "../../../images/PixelFontUpperCase/P.svg";
import Q from "../../../images/PixelFontUpperCase/Q.svg";
import R from "../../../images/PixelFontUpperCase/R.svg";
import S from "../../../images/PixelFontUpperCase/S.svg";
import T from "../../../images/PixelFontUpperCase/T.svg";
import U from "../../../images/PixelFontUpperCase/U.svg";
import V from "../../../images/PixelFontUpperCase/V.svg";
import W from "../../../images/PixelFontUpperCase/W.svg";
import X from "../../../images/PixelFontUpperCase/X.svg";
import Y from "../../../images/PixelFontUpperCase/Y.svg";
import Z from "../../../images/PixelFontUpperCase/Z.svg";
*/


import "./DocumentReader.css";


function TitleReader ({currentDocument}){

    const stringToParse = currentDocument[2];
    const stringStyle = currentDocument[3];

    return (

        <>
            {stringToParse.split(",").filter(value => value !== "").map((char, index) => {

                return (

                    stringStyle.charAt(0) === "0" ? ( /* Plain text (not bold) */

                        <div className = "DocCharacter" key = {index}> {char}</div>

                    ) : (

                        null

                    )
                )

            })}
        </>

    );
}


export default TitleReader;