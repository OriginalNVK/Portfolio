import Navbar from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import Home from "./pages/Home";


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
      </div>
    </div>
  );
}

export default App;
