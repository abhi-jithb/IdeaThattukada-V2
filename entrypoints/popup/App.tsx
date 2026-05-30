import "./App.css"
import  {useState} from 'react'
import Header from "../../src/components/Header"
import EmptyState from "../../src/components/EmptyState"
import FloatingInput from "../../src/components/FloatingInput"

function App(){
  const [thoughts, setThoughts] = useState<string[]>([])
  const addThought = (newThought: string) => {
    setThoughts([newThought, ...thoughts]);
  };

  return(
    <main className="container">
      <Header 
        title="Idea Thattukada V2"  
        subtitle="Stack poping up ideas in a nest without loosing"
        />
        
      <FloatingInput onAddThought={addThought} />

      <div className="thought-list">
          {thoughts.map((item, index) => (
            <div className="thought-card" key={index}>{item}</div> 
          ))}
      </div> 

      {thoughts.length === 0 && (
        <EmptyState 
        title = "No Project YET"
        subtitle = "Project NoteBook will appear here.."
      />
      )}

    </main>
  )
}

export default App;