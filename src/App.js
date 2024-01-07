import "./App.css";
import { BoxContainer } from "./components/BoxContainer";
import { SideNav } from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <div className="content">
        <SideNav />
        <BoxContainer />
      </div>
    </div>
  );
}

export default App;
