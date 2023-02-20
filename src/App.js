import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import FacilityLookup from "./pages/FacilityLookup";
import DoctorFinder from "./pages/DoctorFinder";
import DoctorsList from "./pages/DoctorsList";
import FindTreatment from "./pages/FindTreatment";
import PatientLookup from "./pages/PatientLookup";
import DoctorDasboard from "./pages/DoctorDasboard";
import Doctor from "./pages/Doctor";
import FacilityDetails from "./pages/FacilityDetails";
import PatientDetails from "./pages/PatientDetails";
import SymtomChecker3 from "./pages/SymtomChecker3";
import SymtomChecker2 from "./pages/SymtomChecker2";
import SymptomChecker from "./pages/SymptomChecker";
import SymtomChecker1 from "./pages/SymtomChecker1";
import SymtomChecker4 from "./pages/SymtomChecker4";
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
      case "/facility-lookup":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-finder":
        title = "";
        metaDescription = "";
        break;
      case "/doctorratings":
        title = "";
        metaDescription = "";
        break;
      case "/doctors-list":
        title = "";
        metaDescription = "";
        break;
      case "/find-treatment":
        title = "";
        metaDescription = "";
        break;
      case "/patient-lookup":
        title = "";
        metaDescription = "";
        break;
      case "/doctor-dasboard":
        title = "";
        metaDescription = "";
        break;
      case "/doctor":
        title = "";
        metaDescription = "";
        break;
      case "/facility-details":
        title = "";
        metaDescription = "";
        break;
      case "/patient-details":
        title = "";
        metaDescription = "";
        break;
      case "/symtom-checker3":
        title = "";
        metaDescription = "";
        break;
      case "/symtom-checker2":
        title = "";
        metaDescription = "";
        break;
      case "/symptom-checker":
        title = "";
        metaDescription = "";
        break;
      case "/symtom-checker1":
        title = "";
        metaDescription = "";
        break;
      case "/symtomchecker4":
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
      <Route path="/" element={<Home />} />

      <Route path="/facility-lookup" element={<FacilityLookup />} />

      <Route path="/doctor-finder" element={<DoctorFinder />} />

      <Route path="/doctors-list" element={<DoctorsList />} />

      <Route path="/find-treatment" element={<FindTreatment />} />

      <Route path="/patient-lookup" element={<PatientLookup />} />

      <Route path="/doctor-dasboard" element={<DoctorDasboard />} />

      <Route path="/doctor" element={<Doctor />} />

      <Route path="/facility-details" element={<FacilityDetails />} />

      <Route path="/patient-details" element={<PatientDetails />} />

      <Route path="/symtom-checker3" element={<SymtomChecker3 />} />

      <Route path="/symtom-checker2" element={<SymtomChecker2 />} />

      <Route path="/symptom-checker" element={<SymptomChecker />} />

      <Route path="/symtom-checker1" element={<SymtomChecker1 />} />

      <Route path="/symtomchecker4" element={<SymtomChecker4 />} />
    </Routes>
  );
}
export default App;
