import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 w-full min-h-screen flex flex-col bg-dark text-white">
          <Topbar />
          <main className="p-6 flex-1">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;