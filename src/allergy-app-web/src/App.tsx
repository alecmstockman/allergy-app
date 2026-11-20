import "./App.css";
import HomeIcon from "./assets/HomeIcon";
import ProfileIcon from "./assets/ProfileIcon";
import MenuIcon from "./assets/MenuIcon";
import CalendarIcon from "./assets/CalendarIcon";
import OptionsIcon from "./assets/OptionsIcon";

export default function App() {
  return (
    <div className="app-shell">

      <header className="app-header">
        <h1>Menu Scanner</h1>
      </header>

      <main className="app-content">
        <section className="menu-entry-card">
          <label htmlFor="menu-item">Enter a menu item here:</label>
          <textarea
            id="menu-item"
            name="menuItem"
            placeholder="e.g., Chicken pesto pasta"
            rows={3}
            autoComplete="off"
          />
        </section>

        <button className="menu-entry-submit">Submit</button>
      </main>

      <nav className="navigation-bar">

        <a className="icon-button" type="button" aria-label="Home">
          <HomeIcon />
        </a>

        <a className="icon-button" type="button" aria-label="Menu">
          <OptionsIcon />
        </a>

        <a className="icon-button"type="button"aria-label="Allergy Menu Filter">
          <CalendarIcon />
        </a>

        <a className="icon-button" type="button" aria-label="Menu Scanner" aria-current="page">
          <MenuIcon />
        </a>

        <a className="icon-button" type="button" aria-label="User profile">
          <ProfileIcon />
        </a>

      </nav>

    </div>
  );
}
