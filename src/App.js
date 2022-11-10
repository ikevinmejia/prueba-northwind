import Home from "./components/Home";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
      
      <Home/>
      </ContextProvider>

    </div>
  );
}

export default App;
