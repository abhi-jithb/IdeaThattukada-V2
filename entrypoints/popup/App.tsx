import "./App.css"
import Header from "@/components/Header"
import EmptyState from "@/components/EmptyState"

function App(){
  return(
    <main className="container">
      <Header 
        title="Idea Thattukada V2"
        subtitle="Stack poping up ideas in a nest without loosing"
        />

      <EmptyState 
        title = "No Project YET"
        subtitle = "Project NoteBook will appear here.."
      />

    </main>
  )
}

export default App;