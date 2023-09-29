import React, { useContext } from "react";
import { val } from "./ValNav";

export default function () {
  const foo= useContext(val);
  return (
    <>
<footer className="footer  h-14 flex justify-center items-center   rounded" style={{backgroundColor:  foo.mode==='light'?'white':'#17171c',color: foo.mode==='light'?'black':'white' }}>
  <p className="  text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</footer>
    </>
  );
}
