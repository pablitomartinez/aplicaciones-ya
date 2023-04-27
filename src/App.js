import { Route, Routes, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from "./components/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import SobreNosotros from "./views/SobreNosotros.jsx";
import Footer from "./views/Footer.jsx";


const history = createBrowserHistory();

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
