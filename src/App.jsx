import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <RoutesConfig />
      </AuthProvider>
    </Router>
  );
}
