import "./App.css"
import Header from "../../src/components/Header"
import EmptyState from "../../src/components/EmptyState"
import FloatingInput from "../../src/components/FloatingInput"

function App(){
  return(
    <main className="container">
      <Header 
        title="Idea Thattukada V2"
        subtitle="Stack poping up ideas in a nest without loosing"
        />
        
      <FloatingInput/>

      <EmptyState 
        title = "No Project YET"
        subtitle = "Project NoteBook will appear here.."
      />

    </main>
  )
}

export default App;