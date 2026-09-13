import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import DevStacks from "./devStack/DevStacks";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h1>Loading....</h1>}>
        <DevStacks />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
