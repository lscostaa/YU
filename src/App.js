import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import Sobre from "./pages/Sobre";
import Download from "./pages/Download";
import Doao from "./pages/Doao";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/content":
        title = "";
        metaDescription = "";
        break;
      case "/sobre":
        title = "";
        metaDescription = "";
        break;
      case "/download":
        title = "";
        metaDescription = "";
        break;
      case "/doao":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/content" element={<Content />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/download" element={<Download />} />
      <Route path="/doao" element={<Doao />} />
    </Routes>
  );
}
export default App;
