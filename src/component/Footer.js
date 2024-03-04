import React, { useContext } from "react";
import { val } from "./ValNav";

export default function Footer () {
  const foo= useContext(val);
  const mode_change={
    backgroundColor:foo.mode==="light"?"white":"#262C3C",
    color:foo.mode==="dark"?"white":"black",
    boxShadow:foo.mode==="light"?"":" 0px 3px 4px 0px #373C4A"
   }
  return (
    <>
<footer className="footer  h-14 flex justify-center items-center   rounded" style={mode_change}>
  <p className="  text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</footer>
    </>
  );
}
