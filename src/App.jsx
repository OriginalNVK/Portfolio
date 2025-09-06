import Navbar from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Showcase from "./pages/Showcase";


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
        <footer>
          <center>
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
            <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                OriginalNVK
              </a>
              . All Rights Reserved.
            </span>
          </center>
        </footer>
      </div>
    </div>
  );
}

export default App;
