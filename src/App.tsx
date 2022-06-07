import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/takeoff-staff/sign-in" element={<SignIn />} />
      <Route path="/takeoff-staff/" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
