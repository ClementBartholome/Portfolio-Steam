import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import { AuthProvider } from "./contexts/AuthContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ProjectsProvider>
          <RoutesConfig />
        </ProjectsProvider>
      </AuthProvider>
    </Router>
  );
}
