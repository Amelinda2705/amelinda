import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contacts from "./Contacts";

function App() {
    return (
        <>
            <div className="w-full">
                <Navbar />
                <Hero />
                <Projects />
                <Contacts />
            </div>
        </>
    );
}

export default App;
