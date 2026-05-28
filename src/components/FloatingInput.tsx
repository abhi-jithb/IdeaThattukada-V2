import { useState } from "react";

function FloatingInput(){
    const [thoughts, setThought] = useState("");

    return(
        <div className="floating-input">
            <input type="text" placeholder="Throw that thought here" value={thoughts} onChange={(e) => setThought(e.target.value)}/>
            <button>Add</button>    
        </div>
    );
}

export default FloatingInput