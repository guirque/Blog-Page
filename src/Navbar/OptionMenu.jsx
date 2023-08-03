import { useState } from "react";

export function OptionMenu({name, optionsArray})
{
    const [active, setActive] = useState(false);

    return (
        <menu>
            <input type="button" className="OptionMenu button" value={name} onMouseEnter={()=>setActive(true)} onMouseLeave={() => setActive(false)}/>
            <ul className="Options" onMouseOver={() => setActive(true)} onMouseLeave={() => setActive(false)} style={active ? 
                {
                    visibility: "visible",
                    color: "black",
                    marginTop: "0"
                } : {visibility: "hidden", color: "transparent", transform: "scaleY(0)"}}>
                {optionsArray}
            </ul>
        </menu>
    );
}