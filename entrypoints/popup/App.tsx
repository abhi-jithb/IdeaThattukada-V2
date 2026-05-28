import "./App.css"
import Header from "@/components/Header"

function App(){
  return(
    <main className="container">
      <Header 
        title="Idea Thattukada V2"
        subtitle="Stack poping up ideas in a nest without loosing"
        />

      <section className="empty-state">
        <h2>No project yet</h2>
        <p>Your proejct notebook will apper here</p>
      </section>
    </main>
  )
}

export default App;