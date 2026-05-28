import { useState } from "react";

function FloatingInput(){
    const [thought, setThought] = useState("");
    const handleAddThought = () => {
        console.log(thought);
        setThought("");
    }

    return(
        <div className="floating-input">
            <input type="text" placeholder="Throw that thought here" value={thought} onChange={(e) => setThought(e.target.value)}/>
            <button onClick={handleAddThought}>Add</button>    
        </div>
    );
}

export default FloatingInput