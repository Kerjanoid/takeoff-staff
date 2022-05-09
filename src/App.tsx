import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignIn from "./components/SignIn/SignIn";

const App: React.FC = () => {
  const auth: boolean = false

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn auth={auth} />} />

      <Route element={<ProtectedRoute auth={auth} />}>
        <Route path="/contacts" element={<Contacts />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
