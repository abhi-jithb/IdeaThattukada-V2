import { useState } from "react";

type FloatingInputProps = {
    onAddThought: (newThought: string) => void;
};

function FloatingInput({onAddThought}: FloatingInputProps)
{
    const [thought, setThought] = useState("");
    const handleAddThought = () => {
        if(!thought.trim()) return;

        onAddThought(thought);
        setThought("");

        console.log(thought);
    }

    return(
        <>
            <div className="floating-input">
                <input type="text" placeholder="Throw that thought here" value={thought} onChange={(e) => setThought(e.target.value)}/>
                <button onClick={handleAddThought}>Add</button>    
            </div>
        </>
    );
}

export default FloatingInput;