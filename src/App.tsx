
import './App.css'
import NavigationBar from "./components/NavigationBar/NavigationBar"

function App() {
  return (

    <div className="layout">
      <NavigationBar />

      <div className = "content">
        <main className="home">
        </main>

        <div className="text-panel">
          <p>
            From lab bench to codebase. A journey of love from biotech to digital engineering
          </p>
        </div>
    </div>
    </div>
  )
}

export default App
