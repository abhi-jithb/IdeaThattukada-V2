import { useState } from "react";

function FloatingInput(){
    const [thought, setThought] = useState("");
    const [thoughts, setThoughts] = useState<string[]>([]);

    const handleAddThought = () => {
        if(!thought.trim()) return;

        setThoughts([thought, ...thoughts])
        setThought("");

        console.log(thought);
    }

    return(
        <>
            <div className="floating-input">
                <input type="text" placeholder="Throw that thought here" value={thought} onChange={(e) => setThought(e.target.value)}/>
                <button onClick={handleAddThought}>Add</button>    
            </div>

            <div className="thought-list">
                {thoughts.map((item, index) => (
                    <div className="thought-card" key={index}>{item}</div> 
                ))}
                
            </div> 
        </>
    );
}

export default FloatingInput;