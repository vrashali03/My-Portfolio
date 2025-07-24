import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
