import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Main content scrolls vertically */}
      <main className="flex-grow overflow-y-auto scroll-smooth">
        {/* Landing Section */}
        <section className="py-10 px-6">
          <Landing />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10 px-6">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
