import Home from "./Home";
import initialize from "./start/contract"
import './App.css'
function App() {
  
  return (
    <div>
      <Home />
      <section>
        <button id="connectButton" onClick={initialize} disabled >Connect MetaMask</button>
      </section>
    </div>
  );
  
}

export default App;