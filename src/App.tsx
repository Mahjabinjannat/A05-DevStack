import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import DevStacks from "./component/devStack/DevStacks";
import { Suspense } from "react";
import type { IdevStacksType } from "./types/DevStacksType";
import Footer from "./component/Footer";

function App() {
  const devStacksPromise = async (): Promise<IdevStacksType[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h1>Loading....</h1>}>
        <DevStacks devStacksPromise={devStacksPromise()} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
