import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FinalHome from "./pages/Home/FinalHome";
import FacilityFinder3 from "./pages/Facility/FacilityFinder3";
import FacilityFinder2 from "./pages/Facility/FacilityFinder2";
import FacilityFinder from "./pages/Facility/FacilityFinder";
import HealthAssessment4 from "./pages/HealthAssessment/HealthAssessment4";
import HealthAssessment3 from "./pages/HealthAssessment/HealthAssessment3";
import HealthAssessment2 from "./pages/HealthAssessment/HealthAssessment2";
import HealthAssessment1 from "./pages/HealthAssessment/HealthAssessment1";
import PhysicianFinder3 from "./pages/Doctor/PhysicianFinder3";
import PhysicianFinder1 from "./pages/Doctor/PhysicianFinder1";
import PhysicianFinder2 from "./pages/Doctor/PhysicianFinder2";
import PatientHome from "./pages/PatientHome/PatientHome";
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
      case "/facility-finder3":
        title = "";
        metaDescription = "";
        break;
      case "/facility-finder2":
        title = "";
        metaDescription = "";
        break;
      case "/facility-finder":
        title = "";
        metaDescription = "";
        break;
      case "/health-assessment4":
        title = "";
        metaDescription = "";
        break;
      case "/health-assessment3":
        title = "";
        metaDescription = "";
        break;
      case "/health-assessment2":
        title = "";
        metaDescription = "";
        break;
      case "/health-assessment1":
        title = "";
        metaDescription = "";
        break;
      case "/physician-finder3":
        title = "";
        metaDescription = "";
        break;
      case "/physician-finder1":
        title = "";
        metaDescription = "";
        break;
      case "/physician-finder2":
        title = "";
        metaDescription = "";
        break;
      case "/patienthome":
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
      <Route path="/" element={<FinalHome />} />

      <Route path="/facility-finder3" element={<FacilityFinder3 />} />

      <Route path="/facility-finder2" element={<FacilityFinder2 />} />

      <Route path="/facility-finder" element={<FacilityFinder />} />

      <Route path="/health-assessment4" element={<HealthAssessment4 />} />

      <Route path="/health-assessment3" element={<HealthAssessment3 />} />

      <Route path="/health-assessment2" element={<HealthAssessment2 />} />

      <Route path="/health-assessment1" element={<HealthAssessment1 />} />

      <Route path="/physician-finder3" element={<PhysicianFinder3 />} />

      <Route path="/physician-finder1" element={<PhysicianFinder1 />} />

      <Route path="/physician-finder2" element={<PhysicianFinder2 />} />

      <Route path="/patienthome" element={<PatientHome />} />
    </Routes>
  );
}
export default App;
