import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import OptionsPage from "./pages/OptionsPage";
import ProfilePage from "./pages/ProfilePage";
import ScannerPage from "./pages/ScannerPage";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <NavigationBar />
    </div>
  );
}
