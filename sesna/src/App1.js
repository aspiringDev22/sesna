import "./App.css";
import About from "./components/About";
import Groups from "./components/groups/Groups";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import "../src/styles/App.scss";

function App1() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <Groups /> */}
    </div>
  );
}

export default App1;
