import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
