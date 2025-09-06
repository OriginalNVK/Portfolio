import Navbar from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Star Background */}
      <StarBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        {/* Nội dung chính của trang */}
        <Home />
        <About />
        <Showcase />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
