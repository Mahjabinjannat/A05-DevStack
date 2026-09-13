import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToastContainer />
    </>
  );
}

export default App;
