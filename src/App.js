import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import About from "./components/Body/About";
import Event from "./components/Body/Event";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <About />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
