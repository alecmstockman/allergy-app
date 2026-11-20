import CameraIcon from "../assets/CameraIcon";

export default function ScannerPage() {
  return (
    <>
      <header className="app-header">
        <h1>Menu Scanner</h1>
      </header>

      <main className="app-content">
        <section className="menu-entry-card">
          <div className="menu-entry-label-row">
            <label htmlFor="menu-item">Enter a menu item here:</label>
            <CameraIcon />
          </div>

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
    </>
  );
}
