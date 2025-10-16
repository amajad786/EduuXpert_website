import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import FeaturesPage from "./pages/FeaturesPage";
import HelpPage from "./pages/HelpPage";
import Footer2 from "./components/footer2";
import ContactSection from "./components/ContactSection";
import TermConditions from "./pages/TermConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Layout() {
  const location = useLocation();

  // List of routes where you don't want Header and Footer
  const hidePaths = ["/document",]; 
  const hideLayout = hidePaths.includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/document" element={<HelpPage/>} />
          <Route path="/term & conditions" element={<TermConditions/>} />
          <Route path="/privacy policy" element={<PrivacyPolicy/>} />
          {/* Add other pages here */}
        </Routes>
      </main>
      <Footer2 />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
